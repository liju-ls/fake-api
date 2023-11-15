const userModel = require("../models/userModel");

module.exports.getUsers = async (req, res) => {
  await userModel
    .find()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(200).json({ error: err.message }));
};

module.exports.getSingleUser = async (req, res) => {
  await userModel
    .findOne({ id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(200).json({ error: err.message }));
};
