const express = require("express");
const {
  createArticle,
  findArticle,
  findArticleById,
  findArticleByCategorie,
} = require("../controllers/ArticleCtrl");
const { createCategorie } = require("../controllers/CategorieCtrl");
const { jeux, videos, document } = require("../services/ressources");
const route = express.Router();

//renders
route.get("/jeux", jeux);
route.get("/videos", videos);
route.get("/documents", document);

//categorie
route.post("categorie/add", createCategorie);

//article
route.post("/add", createArticle);
route.get("/", findArticle);
route.get("/:id", findArticleById);
route.get("/categorie/:id", findArticleByCategorie);

module.exports = route;
