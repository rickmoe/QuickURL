import db from "./db.js";

const generateId = (length, characterSet) => {
  let result = "";
  const getRandomIndex = () => Math.floor(Math.random() * characterSet.length);
  for (let i = 0; i < length; i++) {
    result += characterSet.charAt(getRandomIndex());
  }
  return result;
};

// ID Length was chosen so there is >99.9% chance 10000 IDs are unique
// Prob(unique) = (64^n)! / (64^n - m)! / (64^n)^m where n=idLength and
// m is the sample size
const idLength = 6;
const idCharSet =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

const linkMapSchema = new db.Schema({
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
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  pinned: {
    type: Boolean,
    immutable: true,
  },
  password: {
    type: String,
    immutable: true,
  },
});

export default db.model("LinkMap", linkMapSchema);
