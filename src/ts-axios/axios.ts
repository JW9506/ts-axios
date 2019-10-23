import { AxiosInstance } from "./types/index"; 
import Axios from "./core/Axios";
import { extend } from "./helpers/util";

function createInstance(): AxiosInstance {
  /*
    Trying to do something like returning another function in __call__
    method in python
    while request method can be called the regular way, it can also  
    be called right away as soon as Axios object is instantiated.  
  */
  const context = new Axios();
  const instance = Axios.prototype.request.bind(context);
  extend(instance, context);
  return instance as AxiosInstance;
} 

export default createInstance(); 
