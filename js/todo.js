const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDos = [];

function saveTodo(){
    // localStorage.setItem("todos",toDos); 텍스트만 저장이 됨
    // json 타입으로 저장 
    localStorage.setItem("todos",JSON.stringify);
}

const heart = document.querySelector("#like")

function deleteToDo(event){
    //모든 HTML element 에는 하나 이상의 property가 있음 -> 그 중 하나 parentElement  부모요소
    //누른 버튼의 부모
    const li = event.target.parentElement;
    li.remove();
}


// li와 span을 생성
function paintToDo(newTodo){
    const li = document.createElement("li")
    const span = document.createElement("span");
    span.innerHTML = newTodo;
    const button = document.createElement("button")
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(button)
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    //toDos array에 저장
    toDos.push(newTodo);
    paintToDo(newTodo);
}
toDoForm.addEventListener("submit", handleToDoSubmit)



function handleClick(){
    heart.innerText = "❤"
}
heart.addEventListener("click",handleClick);

