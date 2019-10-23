module.exports = function(router) {
  router.get("/error/get", function(req, res) {
    if (Math.random() > 0.5) {
      res.json({
        msg: "Hello world"
      });
    } else {
      res.status(500).end();
    }
  });
  router.get("/error/timeout", function(req, res) {
    setTimeout(() => {
      res.json({
        msg: "Hello world"
      });
    }, 3000);
  });
};
