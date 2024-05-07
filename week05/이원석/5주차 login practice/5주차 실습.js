const loginId = document.getElementById('login_id');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login_btn');
const loginSuccessSection = document.getElementById('login_success');
const loginSection= document.getElementById('login_section');
const clearBtn = document.getElementById('clear_btn');

const color = () =>{
    if(loginId.value.length > 0 && loginId.value.indexOf('@') !== -1 && password.value.length >=5){
        loginBtn.style.backgroundColor ='#E67800';
        // 하나라도 있으면 거짓이 됨 -> 활성화 주황색으로
        loginBtn.disabled = false;
    } else{
        loginBtn.style.backgroundColor ='#808080';
        loginBtn.disabled = true;
        // 활성화? ㅍ비활성화?
    }
};

// 로그인 성공 함수
function loginSuccess() {
    // 로그인 화면을 숨깁니다.
    loginSection.style.display = 'none';
    // 팝업창을 보여줍니다.
    loginSuccessSection.style.display = 'flex';
}
function moveHome(){
    loginSuccessSection.style.display = 'none';
    loginSection.style.display = 'flex';
};

// const moveHome = () =>{
//     loginSuccessSection.style.display = 'none';
//     loginSection.style = 'flex';
// // };

loginId.addEventListener('keyup',color);
password.addEventListener('keyup',color);
loginBtn.addEventListener('click', loginSuccess);
clearBtn.addEventListener('click',moveHome);


