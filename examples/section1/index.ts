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
console.log(x[0].slice(null, 2));
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
