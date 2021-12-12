const mongoose = require("mongoose");

const scteurSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Secteur", scteurSchema);
