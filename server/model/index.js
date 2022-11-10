const mongoose = require("mongoose");

contentSchema = new mongoose.Schema({
  title: String,
  auther: String,
  categories: Array,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  body: String,
  categories: [String],
  shortDescription: String,
});
const ContentModel = mongoose.model("contentmodels", contentSchema);
module.exports = ContentModel;
