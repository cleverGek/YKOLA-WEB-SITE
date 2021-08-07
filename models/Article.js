const mongoose = require("mongoose");

const articleSchema = mongoose.Schema(
  {
    titre: { type: String, required: true },
    contenu: { type: String, required: true },
    sommaire: { type: String, required: true },
    file: String,
    image: { type: String, required: true },
    categorie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categorie",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Article", articleSchema);
