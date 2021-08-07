const express = require("express");
const { sante, politique, sport, culture } = require("../services/tendances");
const route = express.Router();

route.get("/santes", sante);
route.get("/politiques", politique);
route.get("/sports", sport);
route.get("/cultures", culture);

module.exports = route;
