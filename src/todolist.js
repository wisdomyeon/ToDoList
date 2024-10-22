const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-btn");
const todoList = document.querySelector(".todo-list")
const todoDiv = document.createElement("div")
let newTodo = '';

const onInput = (event) => { 
  newTodo = event.target.value;
}

const onButton = () => {
    // 새로운 div 생성
  const todoDiv = document.createElement("div");
  todoDiv.textContent = newTodo;

  // 새로운 div를 할 일 목록에 추가
  todoList.append(todoDiv);

  // 입력 필드 초기화
  todoInput.value = '';
  newTodo = '';
}

todoInput.addEventListener("input", onInput);
todoButton.addEventListener("click",onButton)