const { Router } = require("express");
const { sendMail, inbox } = require("../controllers/mailController");
const route = Router();

route.post("/", sendMail);
route.get("/inbox", inbox);
route.get("/outbox", inbox);

module.exports = route;
