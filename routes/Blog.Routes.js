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
route.post("article/add", createArticle);
route.get("articles", findArticle);
route.get("article/:id", findArticleById);
route.get("article/categorie/:id", findArticleByCategorie);

module.exports = route;
