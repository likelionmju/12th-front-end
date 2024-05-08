const loginId = document.getElementById('emailId');
const loginPw = document.getElementById('passwordId');
const loginBtn = document.getElementById('login_btn');
const color = () => {
  if (
    loginId.value.length > 0 &&
    loginId.value.indexOf('@') !== -1 &&
    loginPw.value.length >= 5
  ) {
    loginBtn.style.backgroundColor = '#E67800';
    loginBtn.disabled = false;

    loginBtn.addEventListener('click', function () {
      login_success_section.style.display = 'flex';
      login_section.style.display = 'none';
    });
  } else {
    loginBtn.style.backgroundColor = '#F5F5F5';
    loginBtn.disabled = true;
  }
};
loginBtn.addEventListener('keyup', color);
loginPw.addEventListener('keyup', color);
loginId.addEventListener('keyup', color);

const login_success_section = document.getElementById('login_success_section');
const login_success_close_btn = document.getElementById('check_btn');
const login_section = document.getElementById('Login_section');

login_success_close_btn.addEventListener('click', function () {
  login_success_section.style.display = 'none';
  login_section.style.display = 'flex';
});
ㅇㄹㅇㄹ{}