// 객체  -  예제문제 1
let student = {
    name: "Lee Haneul",
    age: 25
};

student.grade = 3;
student.name = "Kim Mina";
delete student.age;

console.log(student);


// 비구조화 할당 – 예제문제 1
function displayPerson(person){
    console.log(`이름: ${person.name}`);
    console.log(`나이: ${person.age}`);
}

let personInfo = {
    name: "Yuna Yun",
    age: 22
};

let {name, age} = personInfo;


// 함수 심화 – 예제문제 1
let greeting = (name) => {;
    return `안녕하세요, ${name}님!`;
}

console.log(greeting("김미미"));


// 함수 심화 – 예제문제 2
let fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach(function (value, index){
    console.log(`${index + 1}. ${value}`)
});


// 함수 심화 – 예제문제 3
let message = document.getElementByClassName("message");

let ClickBtn = document.querySelector("#ClickBtn");
ClickBtn.addEventListener("click", () => {
    setTimeout(() => {
        message.textContent = "안녕하세요!";
    }, 3 * 1000);
});


// DOM 조작과 Event 처리 - 예제문제 1
let myButton = document. querySelector("#myButton");
myButton.addEventListener("click", () => {
    console.log("버튼이 클릭되었습니다!");
});


// DOM 조작과 Event 처리 - 예제문제 2
const colorChangeBtn = document.querySelector("#colorChangeBtn");
colorChangeBtn.addEventListener("click", () => {
    const currentColor = colorChangeBtn.style.backgroundColor;

    if(currentColor === 'red'){
        colorChangeBtn.style.backgroundColor = "";
    } else{
        colorChangeBtn.style.backgroundColor = "red";
    }
});


// DOM 조작과 Event 처리 - 예제문제 3
let message = document.querySelector("#message");
let myInput = document.querySelector("#myInput");
myInput.addEventListener("keyup", (e) => {
    message.textContent = e.target.value;
});


// DOM 조작과 Event 처리 - 예제문제 4
let hoverBox = document.querySelector("#hoverBox");
hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.backgroundColor = "skyblue";
});
hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.backgroundColor = "coral";
});


// DOM 조작과 Event 처리 - 예제문제 5
let messageContainer = document.querySelector("#messageContainer");
let userInput = document.querySelector("#userInput");
let addMessage = document.querySelector("#addMessage");

addMessage.addEventListener("click", () => {
    let saveInput = userInput.value;
    const p = document.createElement('p');
    p.textContent = saveInput;
    messageContainer.appendChild(p);
})


// DOM 조작과 Event 처리 - 예제문제 6
let htmlContainer = document.querySelector("#htmlContainer");
let updateHtml = document.querySelector("#updateHtml");
let htmlInput = document.querySelector("#htmlInput");

updateHtml.addEventListener("click", () => {
    let saveInput= htmlInput.value;
    htmlContainer.innerHTML = saveInput;
});