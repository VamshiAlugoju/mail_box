const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    mailData: String,
    sender: String,
    reciver: String,
  },
  { timestamps: true }
);

const userModel = model("mailData", userSchema);
module.exports = userModel;
