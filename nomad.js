// const question = prompt("How old are You?");

// const age = "8"
// // typeof 타입 확인 parseInt 형변환
// console.log(typeof question, parseInt(age));
// // isNaN boolean 값을 반환 
// console.log(isNaN(age));
// // parseInt(age) age에 들어가 있는 값이 숫자가 아닌 경우 NaN반환

const title = document.querySelector("#title");

console.dir(title);
function handleTitleClick(){
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerHTML = "Mouse is here!"
}

function handleMouseLeave(){
    title.innerHTML = "Mouse is gone!"
}

function handleResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier!");
}
function handleWindowOffline(){
    alert("SOS no wifi!")
}

function handleWindowOnline(){
    alert("All good!!!")
}


title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);
//윈도우 사이즈 변경하면 실행
window.addEventListener("resize",handleResize);
//복사하면 실행
window.addEventListener("copy",handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);