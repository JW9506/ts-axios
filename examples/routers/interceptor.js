module.exports = function(router) {
  router.get("/intercepter/get", function(req, res) {
    res.end("Hello  ");
  });
};
