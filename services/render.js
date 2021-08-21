//home
exports.home = (req, res) => {
  res.render("index");
};

exports.admin = (req, res) => {
  res.render("utils/admin/pages/home");
};

/** articles */

exports.categories = (req, res) => {
  res.render("utils/admin/pages/categorie");
};

exports.articlesPub = (req, res) => {
  res.render("utils/admin/pages/articlepub");
};

/** tendance */
exports.secteurs = (req, res) => {
  res.render("utils/admin/pages/secteur");
};
exports.tendancesPub = (req, res) => {
  res.render("utils/admin/pages/tendancepub");
};
/** verification */
exports.check = (req, res) => {
  res.render("utils/admin/pages/check");
};
/** contact */
exports.contact = (req, res) => {
  res.render("utils/admin/pages/contact");
};
/** news */
exports.news = (req, res) => {
  res.render("utils/admin/pages/news");
};
