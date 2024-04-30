//객체-예제1.
let student = {
  name: 'Lee Haneul',
  age: 25,
};
student.grade = 3;
student.name = 'Kim Mina';
delete student.age;

console.log(student);

//비구조화 할당-예제1.
function displayPerson({ name, age }) {
  console.log(`이름: ${name}`);
  console.log(`나이: ${age}`);
}

let { name, age } = {
  name: 'YuJin Jung',
  age: 22,
};

//함수 심화-예제1.
let greeting = (name) => `안녕하세요, ${name}님!`;

console.log(greeting('김미미'));

//함수 심화-예제2.
let fruits = ['Apple', 'Banana', 'Cherry'];

fruits.forEach(function (value, index, array) {
  fruits.push(`${index + 1}. ${value}`);
});
fruits.splice(0, 3);
console.log(fruits);

fruits = fruits.map(function (value, index, array) {
  return `${index + 1}. ${value}`;
});
console.log(fruits);

//함수 심화-예제3.
const ClickBtn = document.getElementById('ClickBtn');
ClickBtn.onclick = setTimeout(() => {
  console.log('안녕하세요!');
}, 3 * 1000);

//DOM 조작과 Event 처리-예제1.
let myButtom = document.getElementById('myButton');
myButtom.onclick = () => console.log('버튼이 클릭되었습니다!');

//DOM 조작과 Event 처리-예제2.
const button = document.getElementById('colorChangeBtn');
button.addEventListener('click', function () {
  let currentColor = button.style.backgroundColor;
  if (currentColor === 'red') {
    button.style.backgroundColor = '';
  } else {
    button.style.backgroundColor = 'red';
  }
});

//DOM 조작과 Event 처리-예제3.
let input = document.querySelector('#myInput');
input.addEventListener('keydown', function () {
  console.log(input.value);
});

//DOM 조작과 Event 처리-예제4.
let hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', () => {
  hoverBox.style.backgroundColor = 'skyblue';
});
hoverBox.addEventListener('mouseout', () => {
  hoverBox.style.backgroundColor = 'coral';
});

//DOM 조작과 Event 처리-예제5.
let addMessage = document.getElementById('addMessage');
let userInput = document.getElementById('userInput');
let messageContainer = document.getElementById('messageContainer');
addMessage.addEventListener('click', () => {
  messageContainer.appendChild('userInput');
});

//DOM 조작과 Event 처리-예제6.
const updateHtml = document.querySelector('#updateHtml');
const htmlContainer = document.querySelector('#htmlContainer');
const htmlInput = document.querySelector('#htmlInput');
updateHtml.addEventListener('click', () => {
  htmlContainer.innerHTML = <p>+htmlInput.value+</p>;
});
