// let n = 1476;
// let a = 0;
// let b = 1;
// let res = 0;

// for (let i = 0; i <= n; i++) {
//   if (i == 0) {
//     res = a;
//   } else if (i == 1) {
//     res = b;
//   } else {
//     res = a + b;
//     a = b;
//     b = res;
//   }
// }
// console.log(res);
// console.log(Number.MAX_VALUE);

const reverse = (str, i = str.length - 1) => {
  if (i == 0) {
    return str[0];
  }
  return str[i] + reverse(str, i - 1);
};

const reverse2 = (str, i = str.length - 1) =>
  i == 0 ? str[0] : str[i] + reverse(str, i - 1);

// const reverse3 = (str) => {
//   resstr = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     resstr.push(str[i]);
//   }
//   return resstr.join('');
// };

let str = "elorda";

res = reverse(str);
console.log(res);

res2 = reverse2(str);
console.log(res2);

// res3 = reverse3(str);
// console.log(res3);

const reverse4 = (str) => {
  if (str.length <= 1) {
    return str;
  }

  return (
    str[str.length - 1] + reverse4(str.substring(1, str.length - 1)) + str[0]
  );
};

res4 = reverse4(str);
console.log(res4);

const reverse5 = (str) => {
  if (str.length <= 1) {
    return str;
  }

  return str[str.length - 1] + reverse5(str.substr(1, str.length - 2)) + str[0];
};

res5 = reverse5(str);
console.log(res5);


