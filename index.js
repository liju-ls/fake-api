const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
const fileNotFound = require("./middleware/fileNotFound");
const mongoose = require("mongoose");
const public = path.join(__dirname + "/public");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to mongodb."))
  .catch((err) => console.log("something wrong : " + err));

app.use(express.static(public));

app.get("/", (req, res) => {
  res.status(200).sendFile("index.html", { root: public });
});
app.use("/", userRouter);
app.use("/", postRouter);
app.use(fileNotFound);

app.listen(
  process.env.PORT,
  console.log("server started at " + process.env.PORT)
);
