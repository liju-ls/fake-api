const NotFoundPage = (req, res, next) => {
  res.status(404).send("<h2>Nothing here. See the documentation</p>");
};

module.exports = NotFoundPage;
