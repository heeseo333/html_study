var number = 0;
// 타입이 없다
// var str = "d"; = 가능
// 출력문
//node .\dir\file.js  = run
console.log(number);
var str = "fd";
var me = "정희서";
console.log(me);

console.log(me, str);
// 자동 연산 ??(더하기를 제외한 다른 사칙 연산)
//나누기도 float을 안해줘도 자동으로 타입 변경

var number = 1;
var number1 = "10";

console.log(number + number1);
// NaN ; not a number
console.log(me / number);

// 반복문
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i); //  JS 의 문제점, 반복문내에 선언된 변수가 반복문 종료후에도 남음(STATIC)
console.log(i, number10); //  number10 is undefined

//변수 재선언? 재생성의 문제  -> let(variables) , const(constant) 
var number = 20;
console.log(number);
