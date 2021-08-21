const express = require("express");
const { admin } = require("../services/render");
const route = express.Router();

route.get("/", admin);

module.exports = route;
