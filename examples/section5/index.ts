function identity<T>(arg: T): T {
  return arg;
}

function loggingIdentity<T>(arg: T): T {
  console.log();
  return arg;
}

interface Iden<T> {
  (arg: T): T;
}

const output = identity<string>("abc");
const output2 = identity("aaa");
console.log(output);
console.log(output2);

const id1: <T>(arg: T) => T = identity;
const id2: { <T>(arg: T): T } = identity;
const id3: Iden<string> = identity;
const id4 = identity;
console.log(id1(1));
console.log(id2(2));
console.log(id3("123"));

console.log();
console.log();
console.log();

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 20;
myGenericNumber.add = function(x, y) {
  return x + y + this.zeroValue;
};
console.log(myGenericNumber.add(1, 2));

function F1<T extends { length: number }>(x: T) {
  return x.length;
}

console.log(F1<string>("abc"));

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const obj = { a: 1, b: 2, c: 9 };
console.log(getProperty(obj, "c"));

class CreateMe {
  length: number;
  width: number;
  constructor() {
    this.length = 10;
    this.width = 10;
  }
}

function create<T>(c: { new (): T }): T {
  return new c();
}

function createV2<T>(c: new () => T): T {
  return new c();
}

const c = create(CreateMe);
console.log(c.length);
const cc = createV2(CreateMe);
console.log(c.width);

class Animal {
  name: string;
}

class Lion extends Animal {
  ability: string[];
}

class Dog extends Animal {
  age: number;
}

// Accepts a Class that has all the attr and methods of Class Aniaml
function createDescendent<T extends Animal>(c: new () => T): T {
  return new c();
}

createDescendent(Lion);
createDescendent(Dog);
