//연습문제 1
const pi = 3.14;
let rad = prompt("반지름을 입력해주세요.");
let area = pi * rad * rad;
alert(`원의 넓이는 ${area}입니다.`);

//연습문제 2
const foods = ['치즈','요구르트','우유'];
foods.push('아이스크림');
console.log(foods);

//연습문제 3
foods.splice(2,0,'빵');
console.log(foods);

//연습문제 4
const num = Number(prompt("숫자를 입력하세요."));
if (num > 0) {
    alert(`${num}은(는) 양수입니다.`);
} else if (num == 0) {
    alert(`${num}은(는) 0입니다.`);
} else {
    alert(`${num}은(는) 음수입니다.`);
}

//연습문제 5
const num = Number(prompt("숫자를 입력하세요."));
if (num % 2 == 0) {
    alert(`${num}은(는) 짝수입니다.`);
} else {
    alert(`${num}은(는) 홀수입니다.`);
}

//연습문제 6
//for 버전
let num = 0;
for (let i = 1; i < 11; i++) {
    console.log(num);
    num += i;
}
//while 버전
let num = 0;
let i = 0;
while ( i < 10) {
    console.log(num);
    i += 1;
    num += i;
}

//연습문제 7
for (let i = 0; i < 5; i++) {
    let stars = '';
    for (let j = 0; j <= i; j++) {
        stars += '*';
    }
    console.log(stars);
}

//연습문제 8
let a = Number(prompt('a를 입력해주세요.'));
let b = Number(prompt('b를 입력해주세요.'));
let num = 0;

function sumAll(a, b) {
    for (let i = a; i <= b; i++) {
        num += i;
    }
}

sumAll(a, b);
console.log(`${num}`);