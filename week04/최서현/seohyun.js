/*객체예제 1번
let student = {
  name: "Lee Haneul",
  age: 25,
};

student.grade = 3;
student.name = "Kim Mina";
delete student.age;

console.log(student.name);
*/
/*비구조화 예제1
function displayPerson(person) {
  const { name, age } = person;
  console.log("이름: ${name}");
  console.log("나이: ${age}");
}
let personInfo = {
  name: "Yujin jung",
  age: 22,
};
displayPerson(personInfo);
*/
/*함수 심화 예제 1
const greeting = (name) => `안녕하세요, ${name}님!`;

console.log(greeting("김미미"));
*/
/*함수 심화 예제 2
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function (value, index) {
  console.log(`${index+1}.${value}`);
});
*/
/*함수 심화 예제 3
let ClickBtn = document.getElementById("ClickBtn");
const message = document.querySelector(".message");
ClickBtn.addEventListener("click", function () {
  setTimeout(() => {
    message.textContent = "안녕하세요";
  }, 3 * 1000);
});
*/
/*
const myButton = document.querySelector(".myButton");
myButton.addEventListener('click',function() {
  console.log("버튼이 클릭되었습니다.")
})
*/
/*
const colorChangebutton = document.querySelector("#colorChangebutton");
colorChangebutton.addEventListener("click", () => {
  const current = colorChangebutton.style.backgroundcolor;
  if (currentcolor === "red") {
    button.style.backgroundcolor = "";
  } else {
    button.style.backgroundcolor = "red";
  }
});
*/
/*
const myInput = document.querySelector("#myInput");
const message = document.querySelector(".message");
myInput.addEventListener("keyup", (e) => {
  message.textContent = e.target.value;
});
*/
/*
let hoverBox = document.querySelector("#hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundcolor = "blue";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundcolor = "coral";
});
*/
/*
let messageContainer = document.querySelector("#messagecontainer");
let userInput = document.querySelector("#userInput");
let addMessage = document.querySelector("#addMessage");
addMessage.addEventListener("click", () => {
  let text = userInput.value;
  if (text !== "") {
    const p = document.createElement("p");
    p.textContent = text;
    messageContainer.appendChild(p);
    userInput.value = ""; 
  }
});
*/
/*
let htmlContainer = document.querySelector("#htmlContainer");
let htmlInput = document.querySelector("#htmlInput");
let updateHtml = document.querySelector("#updateHtml");
htmlInput.addEventListener("click", () => {
  let inputValue = htmlInput.value;
  htmlContainer.innerHTML = inputValue;
});
*/
