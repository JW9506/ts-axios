import axios from "../../src/ts-axios";

axios({
  method: "get",
  url: "/base/get",
  params: {
    foo: ["bar", "baz"]
  }
});

axios({
  method: "get",
  url: "/base/get",
  params: {
    foo: {
      bar: "baz"
    }
  }
});

const date = new Date();
axios({
  method: "get",
  url: "/base/get",
  params: {
    date
  }
});

axios({
  method: "get",
  url: "/base/get",
  params: {
    foo: "@:$, "
  }
});

axios({
  method: "get",
  url: "/base/get",
  params: {
    foo: "bar",
    baz: null
  }
});

axios({
  method: "get",
  url: "/base/get",
  params: {
    foo: "草"
  }
});

axios({
  method: "get",
  url: "/base/get?foo=bar",
  params: {
    bar: "baz"
  }
});

const arr = new Int32Array([21, 31]);
axios({
  method: "post",
  url: "/base/buffer",
  data: arr
})
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

axios({
  method: "post",
  url: "/base/post",
  data: {
    a: 1,
    b: 2
  }
})
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

axios({
  method: "post",
  url: "/base/post",
  headers: {
    "content-type": "application/json",
    Accept: "application/json, text/plain, */*"
  },
  data: {
    a: 1,
    b: 2
  }
})
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

const paramsString = "q=URLUtils.searchParam&topic=api";
const searchParams = new URLSearchParams(paramsString);
axios({
  method: "post",
  url: "/base/post",
  data: searchParams
})
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });
