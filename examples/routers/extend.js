module.exports = function(router) {
  router.post("/extend/post", function(req, res) {
    res.json({
      msg: "hello world, you requested post"
    });
  });
  router.get("/extend/get", function(req, res) {
    res.json({
      msg: "hello world, you requested get"
    });
  });
  router.options("/extend/options", function(req, res) {
    res.json({
      msg: "hello world, you requested options"
    });
  });
  router.delete("/extend/delete", function(req, res) {
    res.status(209).json({
      msg: "hello world, you requested delete"
    });
  });
  router.head("/extend/head", function(req, res) {
    res.status(202).end();
  });
  router.put("/extend/put", function(req, res) {
    res.json({
      msg: "hello world, you requested put"
    });
  });
  router.patch("/extend/patch", function(req, res) {
    res.json({
      msg: "hello world, you requested patch"
    });
  });
  router.get("/extend/user", function(req, res) {
    res.json({
      code: 0,
      message: "ok",
      result: {
        name: "jack",
        age: 18
      }
    });
  });
};
