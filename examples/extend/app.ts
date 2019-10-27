import axios from "../../src/ts-axios";

// by designing the api, calling the instance has the same effect as calling it with .request
// axios({
//   url: "/extend/post",
//   method: "post",
//   data: {
//     msg: "hi"
//   }
// });

// axios.request({
//   url: "/extend/post",
//   method: "post",
//   data: {
//     msg: "hello"
//   }
// });

// axios.get("/extend/get");
// axios.options("/extend/options");
// axios.delete("/extend/delete");
// axios.head("/extend/head");
// axios.post("/extend/post", { msg: "post" });
// axios.put("/extend/put", { msg: "put" });
// axios.patch("/extend/patch", { msg: "patch" });

// axios("/extend/post", { method: "post", data: "okaa", params: { o: 1, k: 2 } });

interface ResponseData<T = any> {
  code: number;
  message: string;
  result: T;
}

interface User {
  name: string;
  age: number;
}

function getUser<T>() {
  // axios default method = get
  return axios<ResponseData<T>>("/extend/user") 
    .then(res => res.data)
    .catch(err => console.log(err));
}

async function test() {
  const user = await getUser<User>();
  if (user) {
    console.log(user.result.name);
  }
}

test();