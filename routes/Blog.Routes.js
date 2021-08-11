const express = require("express");
const { jeux, videos, document } = require("../services/ressources");
const route = express.Router();

//renders
route.get("/jeux", jeux);
route.get("/videos", videos);
route.get("/documents", document);

//api

module.exports = route;
