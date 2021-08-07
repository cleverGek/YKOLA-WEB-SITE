const express = require("express");
const { home } = require("../services/render");
const route = express.Router();

route.get("/", home);

module.exports = route;
