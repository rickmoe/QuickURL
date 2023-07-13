import mongoose from "mongoose";

const generateId = (length, characterSet) => {
  let result = "";
  const getRandomIndex = () => Math.floor(Math.random() * characterSet.length);
  for (let i = 0; i < length; i++) {
    result += characterSet.charAt(getRandomIndex());
  }
  return result;
};

const idLength = 5;
const idCharSet =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

const linkMapSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => generateId(idLength, idCharSet),
    immutable: true,
  },
  url: {
    type: String,
    required: true,
    immutable: true,
  },
});

export default mongoose.model("LinkMap", linkMapSchema);
