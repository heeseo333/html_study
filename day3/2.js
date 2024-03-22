//  List, arr , object
// int[] arr = new int[123];
// List<Integer> list = new ArrayList<>();

// list - const;
// const list = [];
// //  list.add(1);

// for (let i = 1; i < 11; i++) {
//   list.push(i);
// }

// connsole.log(list[0]);
// console.log(list.length);
// const list = [];

// for (let i = 1; i < 11; i++) {
//   if (i != 0 && i % 3 == 0) {
//     console.log("짝");
//   } else {
//     console.log(i);
//   }
// }

// // if i%3==0 list.push

// for (let i = 1; i <= 10; i++) {
//   if (i % 3 == 0) list.push("짝");
//   else list.push(i);
// }

// const num=i % 3 ===0 ? "짝" :index  // 삼항연산자
const list = []; //100-1000
//const list369 = []; //369list

// for (let index = 100; index <= 1000; index++) {
//   const num =
//     (index + "").includes("3") ||
//     (index + "").includes("6") ||
//     (index + "").includes("9")
//       ? "짝"
//       : index;

// if((index +"").includes("3")) num = "짝";
// if((index +"").includes("6")) num = "짝";
// if((index +"").includes("9")) num = "짝";

//   list.push(num);
// }
console.log(list);

for (let index = 100; index <= 1000; index++) {
  list.push(index);
}

// for (let index = 100; index <= 1000; index++) {
//   const num =
//     (index + "").toString.includes("3") ||
//     (index + "").includes("6") ||
//     (index + "").includes("9")
//       ? "짝"
//       : index;
//   list369.push(num);
// }

// console.log(list369);


const list369 = [];

for(index =0; index<list.length; index++){
    const element =
    list[index].includes("3")||
    : list[index];

    list369.push(element);
}