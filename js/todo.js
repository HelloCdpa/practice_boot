const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = [];

const TODOS_KEY = "todos"

function saveTodos(){
    // localStorage.setItem("todos",toDos); 텍스트만 저장이 됨
    // json 타입으로 저장 
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    //모든 HTML element 에는 하나 이상의 property가 있음 -> 그 중 하나 parentElement  부모요소
    //누른 버튼의 부모
    const li = event.target.parentElement;
    li.remove();
   // 타입이 다르기때문에 적용안됨 toDos = toDos.filter(toDo => toDo.id !== li.id);
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
   
}


// li와 span을 생성 newTodo == newTodoObj
function paintToDo(newTodo){
    const li = document.createElement("li");
    //list에 아이디값 생성
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerHTML = newTodo.text;
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
 
    // 삭제하기 위해 id값을 줌
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    //toDos array에 저장
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos != null){
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}



