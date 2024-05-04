import { Request, Response } from "express";
import userModel from "../models/userModel";
import jwt from "jsonwebtoken";
import { secretKey } from "../utils/constants";

export async function signUp(req: Request, res: Response) {
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

export async function login(req: Request, res: Response) {
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
