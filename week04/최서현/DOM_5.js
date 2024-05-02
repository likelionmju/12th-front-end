const messageContainer = document.querySelector("#messageContainer");
const userInput = document.querySelector("#userInput");
const addMessage = document.querySelector("#addMessage");
addMessage.addEventListener("click", () => {
  let text = userInput.value;
  let p = document.createElement("p");
  //createelement로 요소 만들기
  if (text !== "") {
    messageContainer.appendChild(p);
    //appendchild화면상에 표시, 세트임
    p.textContent = text;
    //변수(text를 추가하고 싶은 요소)에 넣을 text를 textcontent를 활용하여 넣을 것(uesrinput)을 value를 활용한다.
    userInput.value = "";
  }
});
