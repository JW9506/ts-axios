const toString = Object.prototype.toString;

export function isDate(val: any): val is Date {
  return toString.call(val) === "[object Date]";
}

// export function isObject(val: any): val is Object {
//   return val !== null && typeof val == "object";
// }

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === "[object Object]";
}

// this behavior is different in TS than in JS
export function extend<T, U>(to: T, from: U): void {
  for (const key in from) {
    (to as T & U)[key] = from[key] as any;
  }
}
