"use script";

const user = document.getElementById('user');
const loginBtn = document.getElementById('login');
const titleLogin = document.getElementById('title-login');
const registerBtn = document.getElementById('register');
const sumbitBtn = document.getElementById('reg-btn');
const background = document.getElementById('bac-login');
const login = document.getElementById('login-register');
const closeBtn = document.getElementById('close');


user.addEventListener('click', ()=>{
    login.style.display = "flex";
    background.style.display = "inline-block";
});

closeBtn.addEventListener('click', ()=>{
    login.style.display = "none";
    background.style.display = "none";
});

registerBtn.addEventListener('click', ()=>{
    registerBtn.style.backgroundColor = "#3cb989";
    loginBtn.style.backgroundColor = "#EFFDFA";
    titleLogin.textContent = "REGISTER NOW";
    sumbitBtn.textContent = "Register Now";
});

loginBtn.addEventListener('click', ()=>{
    loginBtn.style.backgroundColor = "#3cb989";
    registerBtn.style.backgroundColor = "#EFFDFA";
    titleLogin.textContent = "LOGIN NOW";
    sumbitBtn.textContent = "Login Now";
})