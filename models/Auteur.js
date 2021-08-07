const mongoose = require("mongoose");

const acteurSchema = mongoose.Schema(
  {
    noms: { type: String, required: true },
    email: String,
    phone: String,
    address: String,
    profile: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Acteur", acteurSchema);
