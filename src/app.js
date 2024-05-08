const { config } = require("dotenv");
config();
const express = require("express");
const cors = require("cors");
const dbConfig = require("./config/dbConfig");
const { verifyUser } = require("./middleware/authMiddleware");

const app = express();
app.use(express.json());
app.use(urlLogger);
app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.PORT || 8080;

const userRoutes = require("./routes/userRoutes");
const mailRoutes = require("./routes/mailRoutes");

app.use("/user", userRoutes);
app.use("/mail", verifyUser, mailRoutes);

async function startServer() {
  await dbConfig.connectDb();
  app.listen(PORT, () => {
    console.log(`server listenig on ${PORT}`);
  });
}

startServer();

function urlLogger(req, res, next) {
  console.log(req.url, "method", req.method);
  next();
}
