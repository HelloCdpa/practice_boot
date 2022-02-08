const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#inputName");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "userName";
const HIDDEN_CLASSNAME = "hidden";


function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerHTML = `Hello ${username}`
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
   paintGreetings(savedUsername);
}

function logout(){
    localStorage.removeItem(USERNAME_KEY,savedUsername);
    location.reload();
}