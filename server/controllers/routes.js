import express from "express";
import LinkMap from "../models/LinkMap.js";
import { encrypt, compare } from "./crypto.js";

const router = express.Router();
/******* Routes *********/
/*** Get ***/
router.get("/", async (req, res) => {
  // const { page, pageSize } = req.query;
  // const {}
  const mappings = await LinkMap.find()
    .sort({ pinned: -1, createdAt: -1 })
    .select({ _id: 1, url: 1, pinned: 1 });
  res.send(mappings);
});

router.get("/:id", async (req, res) => {
  const mapping = await LinkMap.findOne({ _id: req.params.id }).select({
    _id: 1,
    url: 1,
    pinned: 1,
  });
  if (mapping !== null) res.json(mapping);
  else res.sendStatus(404);
});
/*** Post ***/
router.post("/", async (req, res) => {
  if (req.body?.password) {
    req.body.password = await encrypt(req.body.password);
  }
  const { _id, url, pinned } = await LinkMap.create(req.body);
  res.json({ _id, url, pinned });
});
/*** Put ***/
// Unused
/*** Delete ***/
router.delete("/:id", async (req, res) => {
  const password = req.body.password;
  const { password: hash } = await LinkMap.findOne({ _id: req.params.id });
  if (hash && (!password || !(await compare(password, hash)))) {
    res.sendStatus(400);
    return;
  }
  const result = await LinkMap.deleteOne({ _id: req.params.id });
  if (result?.acknowledged === true) res.json(result);
  else res.sendStatus(404);
});
/************************/
export default router;
