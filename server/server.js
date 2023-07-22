import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./controllers/routes.js";

const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: "https://quick-url.netlify.app/",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

// See https://docs.cyclic.sh/how-to/using-mongo-
// db#connections-in-a-serverless-runtime
const connectMongo = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// Need to connect before app.listen for serverless
// deployment using the chosen host
connectMongo().then(() => {
  app.listen(port, () => console.log(`<Server> Running on port ${port}`));
});
