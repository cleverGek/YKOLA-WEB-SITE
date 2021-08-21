//home
exports.home = (req, res) => {
  res.render("index");
};

exports.admin = (req, res) => {
  res.render("utils/admin/pages/home");
};

exports.categories = (req, res) => {
  res.render("utils/admin/pages/categorie");
};

exports.articlesPub = (req, res) => {
  res.render("utils/admin/pages/articlepub");
};
