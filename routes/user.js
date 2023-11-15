const express = require("express");
const router = express.Router();
const { getUsers, getSingleUser } = require("../controllers/user");

router.get("/users", getUsers);

router.get("/user/:id", getSingleUser);

module.exports = router;
