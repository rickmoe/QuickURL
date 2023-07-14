import express from "express";
import db from "../models/admin.js";

const router = express.Router();

/******* Routes *********/
/*** Get ***/
router.get("/", (req, res) => {
  db.getMappings().then((mappings) => res.send(mappings));
});

router.get("/:id", (req, res) => {
  db.getMappingById(req.params.id).then((mapping) => {
    if (mapping !== null) res.json(mapping);
    else res.status(500).send(`Url ID $(req.params.id) not defined`);
  });
});
/*** Post ***/
router.post("/", (req, res) => {
  db.postMapping(req.body).then((mapping) => res.json(mapping));
});
/*** Put ***/
// Unused
/*** Delete ***/
router.delete("/:id", (req, res) => {
  db.deleteMapping(req.params.id).then((result) => {
    if (result?.acknowledged === true) res.json(result);
    else res.status(500).send(`Unable to delete ID $(req.params.id)`);
  });
});
/************************/

export default router;
