const loginId = document.querySelector("#login-id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#login-btn");
const loginSuccess = document.querySelector("#login-success");
const successButton = document.querySelector("#success-button");
const loginSection = document.querySelector("login-section");
const color = () => {
  if (
    loginId.value.length > 0 &&
    loginId.value.indexOf("@") !== -1 &&
    password.value.length >= 5
  ) {
    loginBtn.style.backgroundColor = "#E67800";
    loginBtn.disabled = false;
  } else {
    loginBtn.style.backgroundColor = "F5F5F5";
    loginBtn.disabled = true;
  }
};

const popUp = () => {
  loginSection.style.display = "none";
  loginSuccess.style.display = "block";
  window.location.href = "login.html";
};

const close = () => {
  loginSuccess.style.display = "none";
  loginSection.style.display = "flex";
};

loginBtn.addEventListener("click", popUp);
password.addEventListener("keyup", color);
loginId.addEventListener("keyup", color);
successButton.addEventListener("click", close);
