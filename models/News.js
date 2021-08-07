const mongoose = require("mongoose");

const newsSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("News", newsSchema);
