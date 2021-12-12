const express = require("express");
const {
  admin,
  categories,
  articlesPub,
  secteurs,
  tendancesPub,
  check,
  contact,
  news,
} = require("../services/render");
const route = express.Router();

route.get("/", admin);

/** articles */
route.get("/categories", categories);
route.get("/publication_articles", articlesPub);

/** tendance */
route.get("/secteur", secteurs);
route.get("/tendancepub", tendancesPub);
/** verification */
route.get("/checking", check);
/** contact */
route.get("/contactez", contact);
/** news */
route.get("/newslleters", news);

module.exports = route;
