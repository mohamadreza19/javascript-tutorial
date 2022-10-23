const mongoose = require("mongoose");

module.exports = mongoConnetion = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/javascripttutorial");
    return console.log("db connected");
  } catch (error) {
    console.log(`db didn't connect||${error}`);
  }
};
