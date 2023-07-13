import express from "express";
import { getMappings, getMappingById } from "../models/admin.js";

const router = express.Router();

/******* Routes *********/
router.get("/", (req, res) => {
  getMappings().then((mappings) => res.send(mappings));
});

router.get("/:id", (req, res) => {
  getMappingById(req.params.id).then((mapping) => {
    if (mapping !== null) res.json(mapping);
    else res.status(500).send(`Url ID $(req.params.id) not defined`);
  });
});
/************************/

export default router;
