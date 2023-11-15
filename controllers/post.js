const postModel = require("../models/postModel");

module.exports.getPosts = async (req, res) => {
  await postModel
    .find()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => res.status(200).json({ error: err.message }));
};

module.exports.getSinglePost = async (req, res) => {
  await postModel
    .findOne({ id: req.params.id })
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(200).json({ error: err.message }));
};
