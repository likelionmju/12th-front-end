const updateHtml = document.querySelector('#updateHtml');
const htmlContainer = document.querySelector('#htmlContainer');
const htmlInput = document.querySelector('#htmlInput');
updateHtml.addEventListener('click', () => {
  htmlContainer.innerHTML = htmlInput.value;
});
