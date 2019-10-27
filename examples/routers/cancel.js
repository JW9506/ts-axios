module.exports = function(router) {
  router.get("/cancel/get", function(req, res) {
    setTimeout(() => {
      res.json("Hello"); 
    }, 1000);
  });
  router.post("/cancel/post", function(req, res) {
    setTimeout(() => {
      res.json(req.body); 
    }, 1000);
  });
};
