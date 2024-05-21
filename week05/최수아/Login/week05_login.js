const loginId = document.getElementById("login-id");
const loginPw = document.getElementById("login-pw");
const loginBtn = document.getElementById("login-btn");

const color = () => {
    if (loginId.value.length > 0 && loginId.value.indexOf('@') !== -1 && loginPw.value.length >= 5) {
        loginBtn.style.backgroundColor = '#E67800';
        loginBtn.disabled = false;
    } else {
        loginBtn.style.backgroundColor = '#F5F5F5';
        loginBtn.disabled = true;
    }
};

loginId.addEventListener('keyup', color);
loginPw.addEventListener('keyup', color);

const popupSection = document.querySelector('#popup-section');
const loginSection = document.querySelector('#login-section');
const popupOpen = document.querySelector('#login-btn');
const popupClose = document.querySelector('#confirm-btn');

popupOpen.addEventListener('click',function(){
    popupSection.style.display = 'flex';
    loginSection.style.display = 'none';
});

popupClose.addEventListener('click',function(){
    loginSection.style.display = 'flex';
    popupSection.style.display = 'none';
});