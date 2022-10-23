const mongoose = require("mongoose");

contentSchema = new mongoose.Schema({
  tilte: String,
  auther: String,
  categories: Array,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  body: String,
});
const ContentModel = mongoose.model("contentmodels", contentSchema);
module.exports = ContentModel;
