const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    mailData: String,
    sender: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    reciver: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const userModel = model("mailData", userSchema);
module.exports = userModel;
