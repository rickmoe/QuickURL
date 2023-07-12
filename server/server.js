const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/:id", (req, res) => {
  res.send(`Express: ${req.params.id}`);
});

app.listen(port, () => console.log(`<Server> Running on localhost:${port}`));
