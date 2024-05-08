//연습문제1.
let r = prompt('반지름을 입력하세요')
const pi = 3.14;
let result = r * r * pi;
alert(`원의 넓이는 ${result}`)

//연습문제2.
let foods = ['치즈', '요구르트', '우유']
foods.push('아이스크림')
console.log(foods)

//연습문제3.
let foods_1 = ['치즈', '요구르트', '우유']
foods_1.push('아이스크림')
foods_1.splice(2, 0, '빵')
console.log(foods)

//연습문제4.
const num1 = Number(prompt('숫자를 입력하세요'))
if (num1 > 0) {
  console.log("입력한 수는 양수입니다")
}

else if (num1 < 0) {
  console.log("입력한 수는 음수 입니다")
}

else if (num1 == 0) {
  console.log("입력한 수는 0입니다")
}

//연습문제5.
const num2 = Number(prompt('숫자를 입력하세요'))
if(num2%2 == 0){
  console.log("입력한 수는 짝수입니다")
}
else if(num2%2 == 1) {
  console.log("입력한 수는 홀수입니다")
}

else {
  console.log("0입니다")
}

//연습문제6. 
let addResult =0;
for(let i=1; i<=10; i++){
  addResult += i
}
console.log(`결과값: ${addResult}`)

//연습문제7.
for (let i = 1; i <= 5; i++) { 
  let stars = '';
  for (let j = 1; j <= i; j++) { 
      stars += '*'; 
  }
  console.log(stars); 
}

//연습문제8. 
let a = Number(prompt('a를 입력해주세요'))
let b = Number(prompt('b를 입력해주세요'))
console.log(sumAll(a, b))

function sumAll(a, b) {
  let output = 0
  for (let i = a; i <= b; i++) {
  output += i
  }
return output
}

