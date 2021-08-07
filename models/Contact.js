const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    noms: { type: String, required: true },
    titre: { type: String, required: true },
    email: { type: String, required: true },
    contenu: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
