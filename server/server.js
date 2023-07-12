const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

let mapping = [
  {
    id: "1",
    url: "https://asdf.com",
  },
  {
    id: "2",
    url: "https://google.com",
  },
];

let getMappingsById = (id) => {
  return mapping.filter((map) => map.id === id);
};

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(mapping);
});

app.get("/:id", (req, res) => {
  let mappings = getMappingsById(req.params.id);
  if (mappings.length > 0) res.json(mappings[0]);
  else res.send(`Url ID $(req.params.id) not defined`);
});

app.get("*", (req, res) => {
  console.log(req);
  res.send("Page not found");
});

app.listen(port, () => console.log(`<Server> Running on localhost:${port}`));
