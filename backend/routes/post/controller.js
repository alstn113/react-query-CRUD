const Joi = require("joi");
const Post = require("../../schemas/post");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

exports.write = async (req, res, next) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    author: Joi.string().required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).json(result.error);
  }
  const { title, body, author } = req.body;
  try {
    const post = await Post.create({
      title,
      body,
      author,
    });
    return res.json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
exports.read = async (req, res, next) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Bad Request" });
  }
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ error: "Not Found" });
    }
    return res.json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
exports.list = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    return res.json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
exports.remove = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Post.remove({ _id: id });
    return res.status(204).json({ success: true });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
