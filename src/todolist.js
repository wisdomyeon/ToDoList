const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-btn");
const todoList = document.querySelector(".todo-list");
let newTodo = '';
let idNum = 1;
const saveText = [];

const onInput = (event) => { 
  newTodo = event.target.value;
}

const onButton = (storageData) => {
  const newId = idNum;
  idNum += 1;

  const newLi = document.createElement("li");
  newLi.id = newId;

  const checkSpan = document.createElement("span");
  checkSpan.innerHTML = "⬜";
  checkSpan.setAttribute("checkTodo", "false");

  const textSpan = document.createElement("span");
  textSpan.textContent = newTodo;
  if (storageData) {
    console.log(storageData)
    textSpan.textContent = storageData.contents
  }

  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";

  newLi.append(checkSpan, textSpan, delBtn)
  todoList.appendChild(newLi);
  todoInput.value = '';

  checkSpan.addEventListener("click", checkBox)
  delBtn.addEventListener("click", deleteTodo)

  const todoObj = {
    id: newId,
    contents: textSpan.textContent,
    completet: checkSpan.classList.contains("complete"),
  }
  saveText.push(todoObj);
  saveTodo();
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
    saveTodo();
  } else {
    event.target.innerHTML = "⬜";
    text.classList.remove("complete");
    event.target.setAttribute("checkTodo", "false");
    saveTodo();
  }
}

const deleteTodo = (event) => { 
  const btn = event.target;
  const li = event.target.parentNode;
  saveText.forEach((todo, index) => {
    if (todo.id == li.id) {
      li.remove();
      saveText.splice(index, 1);
      saveTodo();
    }
  })
}

const saveTodo = () => {
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