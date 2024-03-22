const list = [1, 4, 5, 21, 42, 1, 3, 57, 9, 5231];
// const isEven = [];
// for (let index = 0; index < list.length; index++) {
//   const num = list[index] % 2 == 0 ? true : false;
//   isEven.push(num);
// }
// console.log(isEven);
// // for()[
//     isEven.push(list[i]%2===0);
//

///cosnt isevenlist corresponds to the fist list -> can utilize map function for readibility or effficient code
// map uses an inital list to create another one

const isEvenList = list.map((element, index, arr) => {
  //console.log(element, index, arr);
  return element % 2 === 0;
});

console.log(isEvenList);
