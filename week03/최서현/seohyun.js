//연습문제 01
let r = prompt("반지름 입력");
const pi = 3.14;
let result = r * r * pi;
alert(`반지름은 ${result} 입니다`);

//연습문제 02 ~ 03
const foods = ["치즈", "요구르트", "우유"];
foods.push("아이스크림");
foods.splice(2, 0, "빵");
console.log(foods);

//연습문제 04
const num = Number(prompt("숫자를 입력하세요"));
if (num < 0) {
  console.log("음수입니다");
} else if (num === 0) {
  console.log("0입니다");
} else {
  console.log("양수입니다.");
}

//연습문제 05
const num = Number(prompt("숫자를 입력하세요"));
if ((num %= 1)) {
  console.log("홀수입니다");
} else if ((num %= 0)) {
  console.log("짝수입니다.");
} else {
  console.log("자연수를 입력해주세요");
}

//연습문제 06
let sum = 0;
for (let i = 0; i < 11; i++) {
  sum = sum + i;
}
console.log(sum);

//연습문제 07
for (let i = 0; i < 5; i++) {
  let stars = " ";
  for (let j = 0; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

//연습문제 08
let a = Number(prompt("a를 입력해주세요"));
let b = Number(prompt("b를 입력해주세요"));
let num = 0;
function func(a, b) {
  for (let i = a; i <= b; i++) {
    num = num + i;
  }
}
func(a, b);
console.log(`${num}`);