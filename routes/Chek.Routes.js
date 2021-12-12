const express = require("express");
const { createCheck, findCheck } = require("../controllers/CheckCtrl");
const { check } = require("../services/check");
const route = express.Router();

route.get("/verification", check);

//check

route.post("/checking", createCheck);
route.get("/checkings", findCheck);

module.exports = route;
