const express = require("express");
const { check } = require("../services/check");
const route = express.Router();

route.get("/verification", check);

module.exports = route;
