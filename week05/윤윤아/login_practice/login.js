const loginSec = document.getElementById('login-section');
const loginId = document.getElementById('login-id');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const loginScs = document.getElementById('login-scs-section');
const ok = document.getElementById('ok');

const color = () => {
    if(loginId.value.length > 0 && loginId.value.indexOf('@') !== -1 && password.value.length >= 5){
        loginBtn.style.backgroundColor = '#E67800';
        loginBtn.disabled = false;
    } else{
        loginBtn.style.backgroundColor = '#F5F5F5';
        loginBtn.disabled = true;
    }
};
const popUp = () => {
    loginSec.style.display = 'none';
    loginScs.style.display = 'flex';
}

const close = () => {
    loginScs.style.display = 'none';
    loginSec.style.display = 'flex';
}

loginId.addEventListener('keyup', color);
password.addEventListener('keyup', color);


loginBtn.addEventListener('click', popUp);


ok.addEventListener('click', close);
