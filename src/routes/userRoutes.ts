import { Router } from "express";
import { signUp, login } from "../controllers/userController";
const route = Router();

route.post("/login", login);
route.post("/signup", signUp);

export default route;
