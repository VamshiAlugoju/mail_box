const userModel = require("../models/userModel");
const mailModel = require("../models/mailModel");

async function sendMail(req, res) {
  try {
    const { id, email, mailData } = req.body;
    const user = await userModel.findOne({ _id: req.user.id });
    const reciver = await userModel.findOne({ email: email });
    const mail = await mailModel.create({
      sender: user._id.toString(),
      reciver: reciver._id.toString(),
      mailData: mailData,
    });
    return res.json({ data: mail });
  } catch (err) {
    return res.status(500).json({ error: "internal server error" });
  }
}
exports.sendMail = sendMail;

async function inbox(req, res) {
  try {
    const user = await userModel.findOne({ _id: req.user.id });
    const mailList = await mailModel.find({ reciver: user._id.toString() });
    return res.json({ data: mailList });
  } catch (err) {
    return res.status(500).json({ error: "internal server error" });
  }
}
exports.inbox = inbox;
