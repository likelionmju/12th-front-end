// 연습문제1. 반지름을 입력받아 원의 넓이를 구하는 코드
const pi = 3.14;
let r = prompt('반지름 입력');
let S = pi * r * r;
alert(S);

// 연습문제2. '치즈', '요구르트', '우유'를 포함하는 배열을 작성하고, '아이스크림'을 배열 맨 뒤에 추가하는 코드
let foods = ['치즈', '요구르트', '우유'];
foods.push('아이스크림');
console.log(foods);

// 연습문제3. 연습문제 2에서 만든 배열의 [2]에 '빵' 추가하는 코드
foods.splice(2, 0, '빵');

// 연습문제4. 숫자를 입력받아 양수, 0, 음수를 구분하는 코드
const num = Number(prompt('숫자를 입력하세요'));
if(num > 0){
    alert('양수');
}
else if(num == 0){
    alert(0);
}
else{
    alert('음수');
}

// 연습문제5. 숫자를 입력받아 짝수인지 홀수인지 판단하는 코드
const num1 = Number(prompt('숫자를 입력하세요'));
if(num1%2 == 0){
    alert('짝수');
}
else{
    alert('홀수');
}

// 연습문제6. 1 ~ 10까지 더하는 코드
let num = 0;
for(let i=1; i<11; i++){
    num += i;
}
console.log(num);

// 연습문제 7. 5층 짜리 별 찍기 코드
for(let i=0; i<6; i++){
    let star = '';
    for(let j=0; j<i; j++){
        star += '*';
    }
    console.log(star);
}

// 연습문제 8. a와 b를 입력받아 a ~ b까지 더하는 함수를 만드는 코드
let a = Number(prompt('a를 입력해주세요'));
let b = Number(prompt('b를 입력해주세요'));
let num = 0;
function adding(x, y){
    return num = x+y;
}
adding(a, b);
console.log(num);