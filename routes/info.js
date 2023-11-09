const express = require("express");
const router = express.Router();

const posts = [
  { title: "random", content: "randoms" },
  { title: "adfea", content: "randofaefms" },
  { title: "faef", content: "fae" },
  { title: "ransdfdom", content: "fwef" },
  { title: "fwe", content: "few" },
  { title: "fwefwe", content: "ffefrthgtae" },
];

router.get("/", (req, res) => {
  res.json({ info: "index page." });
});

router.get("/posts", (req, res) => {
  res.json(posts);
});

router.get("/posts/:id", (req, res) => {
  res.json(posts[req.params.id]);
});

module.exports = router;
