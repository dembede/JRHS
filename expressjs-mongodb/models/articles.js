const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: false,
    default: Date.now(),
  },
  excerpt: {
    type: String,
    required: false,
  },
  body: {
    type: String,
    required: false,
  },
});

module.export = mongoose.model("Article", articleSchema);
