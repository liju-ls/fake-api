const express = require("express");
const app = express();
const dotenv = require("dotenv");

const infoRouter = require("./routes/info");
const notFound = require("./middleware/404-page");

dotenv.config();
app.use("/", infoRouter);
app.use(notFound);

app.listen(
  process.env.PORT,
  console.log("server started at " + process.env.PORT)
);
