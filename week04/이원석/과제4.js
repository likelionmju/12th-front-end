// // 1번
// let student = {
//     name: "lee",
//     age:25    
// }
// // 객체 추가
// person.grade = 3;
// // 이름 변경
// person.name =  "Kim Mina"
// // age 삭제
// delete person.age

// // ==========
// // 2번
// function displayPerson(person){
//     console.log('이름: ${person.name}');
//     console.log('나이: ${person.age}');
// }

// let personInfo = {
//     name:"yujin jung",
//     age:22
// };

// let[name,age] = personInfo

// // ====
// // 3번
// function greeting(name){
//     return '안녕하세요,${name}님!';
// }
// console.log(greeting('김레레'));
// // ->
// const greeting = (name) => {
//     return `안녕하세요, ${name}님!`;
// };

// console.log(greeting('김레레'));

// // 3-2
// const fruits = ['Apple','banana','cherry'];
// fruits.forEach(fruit,index){
//     console.log ('${index}번 : $fruit)')

// }

 //dom 1번 

// const btn = document.getElementById('myButton')

// btn.addEventListener('click',()=>{
//   console.log('버튼이 클릭되었습니다!')
// });

//2번
// const btn = document.getElementById('colorChangeBtn')
// btn.addEventListener('click',()=>{
//   const currentColor = btn.style.backgroundColor
//   if(currentColor == 'red'){
//     btn.style.backgroundColor='';
//   }else{
//       btn.style.backgroundColor = 'red';
//     }
// });

 
// const input = document.querySelector('#myInput')
// input.addEventListener('keyup',(event)=>{
//   console.log(`${event.target.value}`)
// })

const hoverBox = document.getElementById('hoverBox')
hoverBox.addEventListener('mouseover',()=>{
    hoverBox.style.backgroundColor= 'skyblue';
});
hoverBox.addEventListener('mouseout',()=>{
    hoverBox.style.backgroundColor= 'coral';
});