interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

console.log();
console.log();
console.log();
console.log();

interface Square {
  color: string;
  area: number;
}

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): Square {
  let newSquare: Square = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let config: SquareConfig = { color: "black", width: 22 };
let mySquare = createSquare(config);
console.log(mySquare);

console.log();
console.log();
console.log();

interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
console.log(p1);

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
a[0] = 99;
console.log(ro);

interface SearchFunc {
  (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = (src, sub) => {
  return src.search(sub) > -1;
};

console.log(mySearch("abc", "aa"));

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray = ["bob", "fred"];
console.log(myArray[1]);

class Animal {
  name: string;
}

class Dog extends Animal {
  breed: string;
}

// return type of numeric index MUST BE a subclass of the return type of string index
interface Okay {
  [x: number]: Dog;
  [x: string]: Animal;
}

// interface notOkay {
//   [x: number]: Animal;
//   [x: string]: Dog;
// }

console.log();
console.log();
console.log();

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) {}
  setTime(d: Date) {
    this.currentTime = d;
  }
}

interface ClockInterfaceV2 {
  tick(): void;
}

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterfaceV2;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterfaceV2 {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterfaceV2 {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}

class AnalogClock implements ClockInterfaceV2 {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick toc");
  }
}

const digital = createClock(DigitalClock, 6, 30);
digital.tick();

const Analog = createClock(AnalogClock, 6, 30);
Analog.tick();
