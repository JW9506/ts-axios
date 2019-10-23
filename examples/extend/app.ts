import axios from "../../src/ts-axios";

// by designing the api, calling the instance has the same effect as calling it with .request
axios({
  url: "/extend/post",
  method: "post",
  data: {
    msg: "hi"
  }
});

axios.request({
  url: "/extend/post",
  method: "post",
  data: {
    msg: "hello"
  }
});

axios.get("/extend/get");
axios.options("/extend/options");
axios.delete("/extend/delete");
axios.head("/extend/head");
axios.post("/extend/post", { msg: "post" });
axios.put("/extend/put", { msg: "put" });
axios.patch("/extend/patch", { msg: "patch" });
