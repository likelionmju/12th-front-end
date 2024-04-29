// 1번문제
var le = prompt("반지름을 입력");
var pi = 3.14;
var ar = pi*le*le;
console.log(ar);

// 2번문제
const foods = ['치즈', '요구르트','우유']
foods.push("아이스크림")

// 3번문제
foods.splice(2,0,"빵")
foods[2]

// 4번문제
var num = Number(prompt('숫자를 입력하세요'))
if (Number===0) {
    alert('0입니다.')
}else if (Number>0){
    alert('양수입니다.')
    }
else{
    alert('음수입니다.')
}

// 5번문제
var num = Number(prompt('숫자를 입력하세요'))
if (num%2===1){
    alert('홀수입니다.')
}
else{
    alert('짝수입니다.')
}

// 6번문제
let num = 0
for (let i = 1; i<=10; i++){
    num= num +i
}
console.log(num);

//7번문제
for (let i = 0; i<5; i++){ //별의 줄
    let stars = '';
    for(let k =0; k<=i; k++) {  //별의 개수
        stars = stars +'*';
    }
    console.log(stars);
}
????


//8번문제



function sum(a,b){
    let result = 0;

    for (let i = a; i<=b; i ++){
        result = result +i;
        
    }
    return result;
}
 console.log(sum(1,10));
