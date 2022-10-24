const mongoose = require("mongoose");

/**
 * Create the schema
 */
const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("News", newsSchema);
