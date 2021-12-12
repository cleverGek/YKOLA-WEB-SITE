const mongoose = require("mongoose");

const articleSchema = mongoose.Schema(
  {
    titre: { type: String, required: true },
    contenu: { type: String, required: true },
    sommaire: { type: String, required: true },
    image: { type: String, required: true },
    categories: {
      name: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Article", articleSchema);
