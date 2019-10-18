function f(shouldInit: boolean) {
  let x: number;
  if (shouldInit) {
    x = 10;
  }
  x = 1;
  return x;
}

console.log(f(true));
console.log(f(false));

function sumMatrix(matrix: number[][]) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (var j = 0; j < currentRow.length; j++) {
      sum += currentRow[j];
    }
  }
  return sum;
}

var matrix = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

console.log(sumMatrix(matrix));

// for (var i = 0; i < 10; i++) {
//   (function(j) {
//     setTimeout(function() {
//       console.log(j);
//     }, 100 * j);
//   })(i);
// }

function sumMatrixV2(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  return sum;
}

console.log("sumMatrixV2(matrix)", sumMatrixV2(matrix));

type C = { a: string; b?: number };
interface G {
  a: string;
  b?: number;
}
function keepWholeObject({ a, b = 1234 } = { a: "" }) {
  console.log(a, b);
}

keepWholeObject({ a: "aaa", b: 5555 });
keepWholeObject();
