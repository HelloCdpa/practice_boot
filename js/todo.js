const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const heart = document.querySelector("#like")

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
}
toDoForm.addEventListener("submit", handleToDoSubmit)



function handleClick(){
    heart.src = "/img/like-click.png"
}
heart.addEventListener("click",handleClick);


function handleCopy(){
    heart.src = "/img/like_empty.png"
}
window.addEventListener("copy",handleCopy);