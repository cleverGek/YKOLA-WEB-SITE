const express = require("express");
const { home, check } = require("../services/render");
const route = express.Router();

route.get("/", home);
route.get("/verification", check);

module.exports = route;
