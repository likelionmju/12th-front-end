const htmlInput = document.getElementById('htmlInput');
const updateHtmlBtn = document.getElementById('updateHtml');
const htmlContainer = document.getElementById('htmlContainer');

updateHtmlBtn.addEventListener('click', function() {
    htmlContainer.innerHTML = htmlInput.value;
});
