import mongoose, { Schema, model } from "mongoose";

interface user {
  name: string;
  password: string;
  email: string;
}

const userSchema = new Schema<user>({
  name: String,
  password: String,
  email: String,
});

const userModel = model<user>("user", userSchema);
export default userModel;
