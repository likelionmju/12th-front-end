const userInput = document.getElementById('userInput');
const addMessageBtn = document.getElementById('addMessage');
const messageContainer = document.getElementById('messageContainer');

addMessageBtn.addEventListener('click', function() {
    const messageText = userInput.value;
    if (messageText !== '') {
        const messageParagraph = document.createElement('p');
        messageParagraph.textContent = messageText;
        messageContainer.appendChild(messageParagraph);
        userInput.value = '';
    }
});