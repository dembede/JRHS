const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  articleId: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  story: {
    type: String,
    required: false,
  },
  articleDate: {
    type: String,
    required: false,
  },
  photo: {
    type: String,
    required: false,
  },
  caption: {
    type: String,
    required: false,
  },
  video: {
    type: String,
    required: false,
  },
  author: {
    type: Array,
    required: false,
  },
  section: {
    type: Array,
    required: false,
  },
  location: {
    type: Array,
    required: false,
  },
  subjects: {
    type: Array,
    required: false,
  },
  keywords: {
    type: Array,
    required: false,
  },
  language: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("News", newsSchema);
