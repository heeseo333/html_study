// let const 와 var 를 같이 쓰지마라,  변수선언은 거의 let or const

//let i=0;
//const i=0;

// for (let i = 0; i < 10; i++) {
//   if (i != 0 && i % 2 == 0) {
//     console.log(i);
//   }
// }

// for (let i = 0; i < 10; i++) {
//   if (i != "0" && i % 2 == 0) {
//     console.log(i);
//   }
// } // 2468 출력, 문자 0과 숫자 0을 구분해야됨
//조건문
// // === 는 타입도 비교한다
// for (let i = 0; i < 10; i++) {
//   if (i === "0") {
//     console.log(i);
//   } else if (i === 0) console.log(true);
// }

//  if("true" == true) ; 같지 않음, true=1

//js single thread, not type sensitive <-> java multi, type sensitive
 //소수
for (let i = 2; i < 100; i++) {
  let isprime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isprime = false;
      break;
    }
  }
  if (isprime) {
    console.log(i);
  }
}
