const mongoose = require("mongoose");

const checkSchema = mongoose.Schema(
  {
    speudo: { type: String, required: true },
    email: { type: String, required: true },
    url: { type: String, required: true },
    doc: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Check", checkSchema);
