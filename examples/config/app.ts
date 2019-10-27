import axios from "../../src/ts-axios";
import qs from "querystring";
import { AxiosTransformer } from "../../src/ts-axios/types/index";

// axios.defaults.headers.common["test2"] = 123;

// axios({
//   transformRequest: [
//     function(data) {
//       return qs.stringify(data);
//       // return data;
//     },
//     ...(axios.defaults.transformRequest as AxiosTransformer[])
//   ],
//   transformResponse: [
//     ...(axios.defaults.transformResponse as AxiosTransformer[]),
//     function(data) {
//       if (typeof data === "object") {
//         data.b = 2;
//       }
//       return data;
//     }
//   ],
//   url: "/config/post",
//   method: "post",
//   data: {
//     a: 1
//   }
// })
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });


const instance = axios.create({
  transformRequest: [
    function(data) {
      return qs.stringify(data);
    },
    ...(axios.defaults.transformRequest as AxiosTransformer[])
  ],
  transformResponse: [
    ...(axios.defaults.transformResponse as AxiosTransformer[]),
    function(data) {
      if (typeof data === "object") {
        data.b = 2;
      }
      return data;
    }
  ]
})

instance({
  url: "/config/post",
  method: "post",
  data: {
    a: 1
  } 
}) 
  .then((res) => {
    console.log(res.data);
  })
  .catch((e) => {
    console.log(e);
  });
