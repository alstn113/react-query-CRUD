const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PostSchema = new Schema({
  title: String,
  body: String,
  author: String,
});

module.exports = mongoose.model("Post", PostSchema);
