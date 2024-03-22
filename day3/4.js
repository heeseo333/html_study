//        java      js
// 기능  메소드  function
// function sum(a, b) {
//   return a + b;
// }

//arrow function
//const sum1 = (a, b) => {
//return a + b;
//};
// 매개변수 선언가능
// const sum1 =(a=b=1) => {
//return a + b;
//}

// function diff(a, b) {
//   return a - b;
// }
// // {}, return 생략가능
// const diff1 = (a, b) => {
//   return a - b;
// };

//const diff1 = (a,b) => a-b;

//console.log(diff(3, 5));

//console.log(sum1(5, 2));

// const multiplication = (a, b) => {
//   return a * b;
// };

// const division = (a, b) => {
//   const sum = () => {
//     return a + b;
//   };
//   return sum() / b;
// };

// console.log(division(1, 3));

// const sum1 =(a,b=1) => {
//     return a+b;
// }
// console.log(sum());

const diff2 = (a, b = 2) => a - b;
const sum2 = (a, b = 2) => a + b;
const div2 = (a, b = 2) => a / b;
const multi2 = (a, b = 2) => a * b;

console.log(diff2(sum2(diff2(sum2(3)), 9), 4));

console.log(sum2);
//const list = [diff2(), diff1()];
//console.log(list[0](21));

const list = [sum2, diff2, multi2, div2, (a) => a * a];
let total = 0;
for (let i = 0; i < list.length; i++) {
  total += list[i](i, 10);
}
//console.log(total);

//const pow = list[4];
// 순서 거꾸로
const [sum3, diff3, multi3, div3, pow3] = list;
console.log(sum3(1, 2));
