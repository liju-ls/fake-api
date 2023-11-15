const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: { type: String },
  subTitle: { type: String },
  description: { type: String },
  content: { type: String },
});

module.exports = mongoose.model(process.env.MONGO_POST_COLLECTION, postSchema);
