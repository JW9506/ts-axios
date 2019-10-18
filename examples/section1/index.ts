let isDone: boolean;
isDone = true;
console.log(isDone);

let decLit: number = 20;
let hexLit: number = 0x14;
let binLit: number = 0b10100;
console.log(hexLit);
console.log(binLit);

console.log();
console.log();

let list: number[] = [1, 2, 3];
console.log(list);
let list2: Array<number> = [1, 2, 3];
console.log(list2);

console.log();
console.log();

let x: [string, number];
x = ["Hello", 15];
console.log(x[0].slice(0, 2));
console.log(x[1].toPrecision(5));

enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Blue;
console.log(c);
console.log();
let colorName: string = Color[Color.Blue];
console.log(colorName);

let notSure: any = 4;
notSure = "string";
notSure = true;
console.log(notSure);

// Auto type
let typeGuess = 5;

let list3: any[] = [1, true, "free"];
function warnUser(): void {
  console.log("Warn");
  return;
}

// 联合类型
let numNull: number | null = 3;
numNull = null;
console.log(numNull);

// never使用场景:
// while(true)
// throw Error();
function error(message: string): never {
  throw new Error(message);
}

// error("failed....");

declare function create(o: object | null): void;

let someValue: any = "this is a string";
let stringLength1: number = (<string>someValue).length;
let stringLength2: number = (someValue as string).length;
let stringLength3: number = someValue.length;
console.log("stringLength", stringLength1);
console.log("stringLength", stringLength2);
console.log("stringLength", stringLength3);
