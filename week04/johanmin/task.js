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
fruits.forEach((fruits, index) => {
  console.log(`${index + 1}. ${value}`);
});
