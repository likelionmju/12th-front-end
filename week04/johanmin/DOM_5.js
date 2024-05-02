let addMessage = document.getElementById('addMessage');
let userInput = document.getElementById('userInput');
let messageContainer = document.getElementById('messageContainer');

addMessage.addEventListener('click', () => {
  let pMessage = document.createElement('p');
  pMessage.textContent = userInput.value;
  messageContainer.appendChild(pMessage);
});
