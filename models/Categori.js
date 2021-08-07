const mongoose = require("mongoose");

const categorieSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    describe: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Categorie", categorieSchema);
