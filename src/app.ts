import { config } from "dotenv";
config();
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { connectDb } from "./config/dbConfig";
const app = express();
app.use(express.json());
app.use(urlLogger);
app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.PORT || 8080;

import userRoutes from "./routes/userRoutes";

app.use("/user", userRoutes);

async function startServer() {
  await connectDb();
  app.listen(PORT, () => {
    console.log(`server listenig on ${PORT}`);
  });
}

startServer();

function urlLogger(req: Request, res: Response, next: NextFunction) {
  console.log(req.url, "method", req.method);
  next();
}
