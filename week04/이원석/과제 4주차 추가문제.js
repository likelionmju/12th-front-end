//5번
// var messageContainer = document.getElementById("messageContainer");
// var addButton = document.getElementById("addMessage");
// var userInput = document.getElementById("userInput");

// addButton.addEventListener("click",()=>{
//   var messageText = userInput.value; 
//   console.log(messageText)
//  if (messageText !== "") { //공백이 아니라면
//     var p = document.createElement("p");
//     p.textContent = messageText; 
//     messageContainer.appendChild(p); 
//     userInput.value = ""; 
//  }
// });

//6번
var htmlContainer = document.getElementById("htmlContainer");
var updateButton = document.getElementById("updateHtml");
var htmlInput = document.getElementById("htmlInput");

updateButton.addEventListener("click",()=> {
  var userInputHtml = htmlInput.value; 
  htmlContainer.innerHTML = userInputHtml; 
});
//git dd