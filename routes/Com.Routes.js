const express = require("express");
const {
  createContact,
  findContact,
  createNews,
  findNews,
} = require("../controllers/ComCtrl");
const route = express.Router();

//Les Contact
route.post("/contact", createContact);
route.get("/contact", findContact);
//Les News
route.post("/news", createNews);
route.get("/news", findNews);

module.exports = route;
