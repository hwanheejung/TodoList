// clock
const clock = document.querySelector('.clock');

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);




const login_container = document.querySelector('.login-container');

check_login();
const login_box = document.querySelector('.login-box');
document.querySelector('.login_signup .sign_btn').addEventListener('click', () => {
    login_box.classList.remove('active');
})
document.querySelector('.login_signup .login_link').addEventListener('click', () => {
    login_box.classList.add('active');
})

// login

let users = [
    { name : 'test', email : 'test@naver.com', pw : '12345' },
]

check_currUser();

localStorage.setItem('users', JSON.stringify(users));
users = JSON.parse(localStorage.getItem('users'));


loginSubmit.addEventListener('submit', (event)=>{
    event.preventDefault();
    const email = document.querySelector('#useremail');
    const pw = document.querySelector('#userpw');
    const eValue = email.value;
    const pwValue = pw.value;

    const localUsers = JSON.parse(localStorage.getItem('users'));
    const data = localUsers.find(user => user.email === eValue && user.pw ===  pwValue);
    
    if( data ){
        check_login();
        let currentUser = {};
        currentUser.email = email.value;
        currentUser.pw = pw.value;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        check_currUser();
        email.value = '';
        pw.value = '';
    }else{
        alert('email 또는 password 확인하세요.');
    }
})
function check_currUser(){
    const cur_data = JSON.parse(localStorage.getItem('currentUser'));
    if(cur_data !== null){
        login_container.classList.remove('active');
        check_login();
        document.querySelector('.profile-name').innerHTML = cur_data.email;
    }
}

signupSubmit.addEventListener('submit', (event)=>{
    event.preventDefault();

    res_pw = password_confirm(); 
    res_email = email_confirm();
    if(res_pw === 'success' && res_email === 'success'){
        let new_user = {};
        new_user.name = new_name.value;
        new_user.email = new_email.value;
        new_user.pw = new_pw.value;
    
        users.push( new_user );
        localStorage.setItem('users', JSON.stringify(users));
    
        new_name.value = ''
        new_email.value = ''
        new_pw.value = ''
        re_pw.value = ''
        login_box.classList.add('active');
        alert("회원가입이 완료되었습니다. 로그인하세요.");
    }
    

})

function check_login(){
    if (login_container.classList.contains('active')){
        document.querySelector('.main').style.display = 'none';
        document.querySelector('.header-account').style.display = 'none';
        document.querySelector('.login-container').style.display = 'flex';
    }else{
        login_container.style.display = 'none';
        document.querySelector('.main').style.display = 'flex';
        document.querySelector('.header-account').style.display = 'block';
    }
}
function password_confirm(){
    const newpw = new_pw.value;
    const repw = re_pw.value;
    if( newpw !== repw ){
        alert( "비밀번호가 일치하지 않습니다. ");
        new_pw.value = '';
        re_pw.value = '';
        return 'fail';
    }
    return 'success';
}
function email_confirm(){
    const localUsers = JSON.parse(localStorage.getItem('users'));
    const data = localUsers.find(user => user.email === new_email.value);
    if(data){
        alert('이미 사용중인 이메일입니다');
        new_email.value = '';
        return 'fail';
    }
    return 'success';
}


// logout
document.querySelector('.header-account').addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    check_logout();
})

function check_logout(){
    const cur_data = JSON.parse(localStorage.getItem('currentUser'));
    if(cur_data === null){
        login_container.classList.add('active');
        check_login();
    }
}


