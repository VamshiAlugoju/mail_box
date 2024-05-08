const jwt = require("jsonwebtoken");
const { secretKey } = require("../utils/constants");
const userModel = require("../models/userModel");

async function verifyUser(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(400).json({ error: "token not found" });
    const data = jwt.verify(token, secretKey);
    if (typeof data === "string")
      return res.status(400).json({ error: "invalid token" });
    const user = await userModel.findOne({ email: data.email });
    req.user = { id: user.id };
    next();
  } catch (err) {
    return res.status(500).json({ error: "internal error" });
  }
}
exports.verifyUser = verifyUser;
