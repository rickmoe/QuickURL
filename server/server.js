import "dotenv/config";
import express from "express";
import router from "./controllers/routes.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`<Server> Running on localhost:${port}`));

export default app;
