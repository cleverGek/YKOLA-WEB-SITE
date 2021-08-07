//home
exports.home = (req, res) => {
  res.render("index");
};

//check up
exports.check = (req, res) => {
  res.render("utils/pages/check");
};
