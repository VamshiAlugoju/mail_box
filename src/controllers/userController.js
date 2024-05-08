const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { secretKey } = require("../utils/constants");

async function signUp(req, res) {
  try {
    const { email, password, name } = req.body;
    const userDoc = await userModel.findOne({ email: email });
    if (userDoc !== null)
      return res.status(400).json({ error: "user already exists" });
    const user = await userModel.create({
      name: name,
      email: email,
      password: password,
    });

    return res.json({ data: user });
  } catch (err) {
    return res.json({ error: "internal error" });
  }
}
exports.signUp = signUp;

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({
      email: email,
    });
    if (!user) return res.status(400).json({ error: "account not found" });
    if (user?.password !== password) {
      return res.status(400).json({ error: "password incorrect" });
    }
    const token = jwt.sign({ email: user?.email }, secretKey);
    return res.json({
      data: {
        email: user?.email,
        token: token,
      },
    });
  } catch (err) {
    return res.json({ error: "internal error" });
  }
}
exports.login = login;

async function getAllUsers(req, res) {
  try {
    console.log(req.user);
    const allusers = await userModel.find({}, { name: 1, email: 1 });

    return res.json({ data: allusers });
  } catch (err) {
    return res.status(500).json({ error: "internal error" });
  }
}
exports.getAllUsers = getAllUsers;
