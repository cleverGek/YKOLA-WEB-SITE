const mongoose = require("mongoose");

const tendanceSchema = mongoose.Schema(
  {
    titre: { type: String, required: true },
    image: { type: String, required: true },
    sommaire: { type: String, required: true },
    contenu: { type: String, require: true },
    secteurs: {
      name: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tendance", tendanceSchema);
