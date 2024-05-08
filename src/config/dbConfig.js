const mongoose = require("mongoose");

const url =
  "mongodb+srv://vamshi:HXfa9On05lJVTmNW@mailbox.xdfe1ih.mongodb.net/mailbox?retryWrites=true&w=majority&appName=mailbox";
const user = "alugojuvamshi";
const password = "cGVoWdiqaCbPz4OE";

async function connectDb() {
  try {
    let db = await mongoose.connect(url);
    console.log("connected to db");

    return db;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  connectDb,
};
