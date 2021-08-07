const mongoose = require("mongoose");

const tendanceSchema = mongoose.Schema(
  {
    titre: { type: String, required: true },
    image: { type: String, required: true },
    vrais: [
      {
        element: String,
      },
    ],
    faux: [
      {
        element: String,
      },
    ],
    sommaire: { type: String, required: true },
    contenu: { type: String, require: true },
    secteur: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Secteur",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tendance", tendanceSchema);
