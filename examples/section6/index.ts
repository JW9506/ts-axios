import * as _ from "lodash";

let x = 3;

class Animal {
  numLegs: number;
}

class Bee extends Animal {}
class Lion extends Animal {}

const zoo: Animal[] = [new Bee(), new Lion()];

function extend<T, U>(first: T, second: U): T & U {
  let result = {} as T & U;
  result = _.assign({}, first, second);
  return result;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 5, c: 3 };
console.log(extend(obj1, obj2));

class Person {
  constructor(public name: string) {}
}

interface Loggable {
  log(): void;
}

class ConsoleLogger implements Loggable {
  age = 15;
  log() {
    console.log("logging");
  }
}

const jay = extend(new Person("JaY"), new ConsoleLogger());

console.log(jay);
