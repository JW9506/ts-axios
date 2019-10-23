module.exports = function(router) {
  router.get("/simple/get", function(req, res) {
    res.json(req.query);
  });
};
