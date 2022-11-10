const mongoose = require("mongoose");

module.exports = mongoConnetion = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://root:13801388Mr@mern.uciky.mongodb.net/javascripttutorial?retryWrites=true&w=majority"
    );
    return console.log("db connected");
  } catch (error) {
    console.log(`db didn't connect||${error}`);
  }
};
