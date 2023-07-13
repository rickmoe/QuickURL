import mongoose from "mongoose";
import LinkMap from "./LinkMap.js";

mongoose.connect(process.env.MONGO_URI);

/******** Helpers ********/
// Get
export const getMappings = async () => {
  return await LinkMap.find();
};

export const getMappingById = async (id) => {
  return await LinkMap.findOne({ _id: id });
};
// Post
const postMapping = async ({ url }) => {
  return await LinkMap.create({ url: url });
};
// Update

// Delete
/*************************/
