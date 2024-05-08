const { Router } = require("express");
const { signUp, login, getAllUsers } = require("../controllers/userController");
const route = Router();

route.post("/login", login);
route.post("/signup", signUp);
route.get("/", getAllUsers);

module.exports = route;
