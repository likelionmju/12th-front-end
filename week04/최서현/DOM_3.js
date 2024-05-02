const myInput = document.querySelector("#myInput");
const message = document.getElementById("message");
myInput.addEventListener("keyup", (e) => {
  message.textContent = e.target.value;
});
