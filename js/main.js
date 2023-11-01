// const fibonacci = (n) => {
//   if (n == 0) {
//     return 0;
//   }
//   else if (n == 1) {
//     return 1;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// let fib = fibonacci(40);
// console.log(fib);

let n = 1476;
let a = 0;
let b = 1;
let res = 0;

for (let i = 0; i <= n; i++) {
  if (i == 0) {
    res = a;
  } else if (i == 1) {
    res = b;
  } else {
    res = a + b;
    a = b;
    b = res;
  }
}
console.log(res);
console.log(Number.MAX_VALUE);

// let c = 0;

// while(res < Number.MAX_VALUE) {
//     res = a + b;
//     a = b;
//     b = res;
//     c++;
// }
// console.log(a);
// console.log(c);

