const h1 = document.querySelector("div.hello:first-child h1");
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#inputName");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
//String만 포함된 변수는 대문자로 표기하고 String을 저장하고 싶을 때 사용
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleTitleClick(){
// if(h1.style.color ==="blue"){
//     h1.style.color = "tomato";
// }else{
//     h1.style.color = "blue";
// }
//row value 는 실수를 범할 수 있으므로 변수를 선언해서 적도록 한다. 
    // if(h1.className === "active") {
    //     h1.className = "";
    // }else{
    //     h1.className = "active"
    // }

    // const cilckedClass = "active";
    // if(h1.className === cilckedClass) {
    //     h1.className = "";
    // }else{
    //     h1.className = cilckedClass
    // }

    // className으로 직접 바꾸는 것은 권하지 않음.
    //classList element의 class 내용물을 조작하는 것을 허용함
    // cilcked를 포함하고 있는지만 확인
    const cilckedClass = "cilcked";
    // if(h1.classList.contains(cilckedClass)) {
    //     h1.classList..remove(cilckedClass)
    // }else{
    //     h1.classList.add(cilckedClass)
    // }
    // 토글이란? 하나의 설정 값으로부터 다른 값으로 전환하는 것
    h1.classList.toggle("clicked")

}



h1.addEventListener("click",handleTitleClick);
const username = loginInput.value;
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
   
    //String과 변수를 합쳐서 사용하는 방법
    // greeting.innerHTML = "Hello" + username;
    // `백틱 ${변수명}`
    localStorage.setItem(USERNAME_KEY,username);
    greeting.innerHTML = `Hello ${username}`; 

    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    //show the greetings
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerHTML = `Hello ${username}`; 
}




function handleLinkClick(event){
    event.preventDefault();
}
link.addEventListener("click",handleLinkClick)

