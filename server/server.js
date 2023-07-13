import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import router from "./controllers/routes.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => console.log(`<Server> Running on localhost:${port}`));

export default app;
