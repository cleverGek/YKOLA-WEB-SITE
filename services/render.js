//home
exports.home = (req, res) => {
  res.render("index");
};

exports.admin = (req, res) => {
  res.render("utils/admin/pages/home");
};
