// 객체 - 예제1
let student = {
    name: "Lee Haneul",
    age: 25
};

student.grade = 3;
student.name = "Kim Mina";
delete student.age;

console.log(student)

// 비구조화 할당 - 예제1
function displayPerson({name, age}) {
    console.log(`이름: ${name}`);
    console.log(`나이: ${age}`);
}

const personInfo = {
    name: "SooA Choi",
    age: 22
};

displayPerson(personInfo);

// 함수 심화 - 예제1
const greeting = (name) => `안녕하세요, ${name}님!`;

console.log(greeting("김미미"));

// 함수 심화 - 예제2
let fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit}`);
});

// 함수 심화 - 예제3 index.html
document.getElementById("ClickBtn").addEventListener("click", function() {
    setTimeout(function() {
        document.getElementById("message").innerText = "안녕하세요!";
    }, 3*1000);
});