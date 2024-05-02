const htmlContainer = document.querySelector("#htmlContainer");
const updateHtml = document.querySelector("#updatehtml");
const htmlInput = document.querySelector("#htmlInput");
htmlContainer.addEventListener("click", () => {
  let inner = htmlinput.value;
  htmlContainer.innerHTML = inner;
});
