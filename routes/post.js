const express = require("express");
const router = express.Router();
const { getPosts, getSinglePost } = require("../controllers/post");

router.get("/posts", getPosts);

router.get("/post/:id", getSinglePost);

module.exports = router;
