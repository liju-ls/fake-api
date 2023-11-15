const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  name: { type: String },
  username: { type: String },
  email: { type: String },
  address: {
    street: { type: String },
    city: { type: String },
    zipcode: { type: String },
  },
  phone: { type: String },
});

module.exports = mongoose.model(process.env.MONGO_USER_COLLECTION, userSchema);
