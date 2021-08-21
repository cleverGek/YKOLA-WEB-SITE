const express = require("express");
const { admin, categories, articlesPub } = require("../services/render");
const route = express.Router();

route.get("/", admin);
route.get("/categories", categories);
route.get("/publication_articles", articlesPub);

module.exports = route;
