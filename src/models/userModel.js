const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
});

const userModel = model("user", userSchema);
module.exports = userModel;
