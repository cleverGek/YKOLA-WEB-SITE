const express = require("express");
const { createSecteur } = require("../controllers/Secteur");
const {
  createTendance,
  findTendanceById,
  findTendanceBySecteur,
  findTendance,
} = require("../controllers/Tendance");
const { sante, politique, sport, culture } = require("../services/tendances");
const route = express.Router();

route.get("/santes", sante);
route.get("/politiques", politique);
route.get("/sports", sport);
route.get("/cultures", culture);

//Secteur

route.post("/secteur/add", createSecteur);

//tendences
route.post("article/add", createTendance);
route.get("articles", findTendance);
route.get("article/:id", findTendanceById);
route.get("article/categorie/:id", findTendanceBySecteur);

module.exports = route;
