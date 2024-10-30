const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-btn");
const todoList = document.querySelector(".todo-list")
const check = document.createTextNode("✅");
let newTodo = '';

const onInput = (event) => { 
  newTodo = event.target.value;
}

const onButton = () => {
  const newLi = document.createElement("li");
  const checkSpan = document.createElement("span");
  checkSpan.innerHTML = "⬜";
  const newSpan = document.createElement("span");
  newSpan.textContent = newTodo;
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  newLi.append(checkSpan, newSpan, delBtn)
  todoList.appendChild(newLi);
  todoInput.value = '';
  console.log(todoList)
}

const enterKey = (event) => { 
  if (event.code == 'Enter') {
    event.preventDefault();
    onButton();
  }
}

todoInput.addEventListener("input", onInput);
todoButton.addEventListener("click",onButton)