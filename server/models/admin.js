import mongoose from "mongoose";
import LinkMap from "./LinkMap.js";

mongoose.connect(process.env.MONGO_URI);

const db = {};
/******** Database Methods ********/
// Get
db.getMappings = async () => {
  return await LinkMap.find();
};

db.getMappingById = async (id) => {
  return await LinkMap.findOne({ _id: id });
};
// Post
db.postMapping = async ({ url }) => {
  return await LinkMap.create({ url: url });
};
// Put
// Delete
/**********************************/
export default db;
