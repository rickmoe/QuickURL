import express from "express";
import LinkMap from "../models/LinkMap.js";

const router = express.Router();
/******* Routes *********/
/*** Get ***/
router.get("/", (req, res) => {
  LinkMap.find().then((mappings) => res.send(mappings));
});

router.get("/:id", (req, res) => {
  LinkMap.findOne({ _id: req.params.id }).then((mapping) => {
    if (mapping !== null) res.json(mapping);
    else res.status(500).send(`Url ID $(req.params.id) not defined`);
  });
});
/*** Post ***/
router.post("/", (req, res) => {
  LinkMap.create(req.body).then((mapping) => res.json(mapping));
});
/*** Put ***/
// Unused
/*** Delete ***/
router.delete("/:id", (req, res) => {
  LinkMap.deleteOne({ _id: req.params.id }).then((result) => {
    if (result?.acknowledged === true) res.json(result);
    else res.status(500).send(`Unable to delete ID $(req.params.id)`);
  });
});
/************************/
export default router;
