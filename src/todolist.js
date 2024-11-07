const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-btn");
const todoList = document.querySelector(".todo-list");
let newTodo = '';
const saveText = [];

const onInput = (event) => { 
  newTodo = event.target.value;
}

const onButton = (storageData) => {
  const newLi = document.createElement("li");
  const checkSpan = document.createElement("span");
  checkSpan.innerHTML = "⬜";
  checkSpan.setAttribute("checkTodo", "false");
  const newSpan = document.createElement("span");
  newSpan.textContent = newTodo;
  if (storageData) {
    newSpan.textContent = storageData.contents
  }
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  newLi.append(checkSpan, newSpan, delBtn)
  todoList.appendChild(newLi);
  todoInput.value = '';
  saveTodo(newLi);
  checkSpan.addEventListener("click", checkBox)
  delBtn.addEventListener("click", deleteTodo)
};

const enterKey = (event) => { 
  if (event.code == 'Enter') {
    event.preventDefault();
    onButton();
  }
}

const checkBox = (event) => {
  const text = event.target.nextElementSibling;
  const check = event.target.getAttribute("checkTodo") === "true";
  if ( !check ) {
    event.target.innerHTML = "✅";
    text.classList.add("complete");
    event.target.setAttribute("checkTodo", "true");
  } else {
    event.target.innerHTML = "⬜";
    text.classList.remove("complete");
    event.target.setAttribute("checkTodo", "false");
  }
}

const deleteTodo = (event) => { 
  const btn = event.target;
  const li = event.target.parentNode;
  li.remove();
}

const saveTodo = (li) => { 
  const extractedText = li.childNodes[1].textContent;
  const todoObj = {
    contents: extractedText,
  }
  saveText.push(todoObj);
  console.log(JSON.stringify(saveText))
  localStorage.setItem("savedTodo", JSON.stringify(saveText))
}

const savedTodoList = JSON.parse(localStorage.getItem('savedTodo'));
if (savedTodoList) { 
  for (let i = 0; i < savedTodoList.length; i++){
    onButton(savedTodoList[i])
  }
}

todoInput.addEventListener("input", onInput);
todoButton.addEventListener("click", onButton);