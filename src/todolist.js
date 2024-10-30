const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-btn");
const todoList = document.querySelector(".todo-list");
let newTodo = '';

const onInput = (event) => { 
  newTodo = event.target.value;
}

const onButton = () => {
  const newLi = document.createElement("li");
  const checkSpan = document.createElement("span");
  checkSpan.innerHTML = "⬜";
  checkSpan.setAttribute("checkTodo", "false");
  const newSpan = document.createElement("span");
  newSpan.textContent = newTodo;
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  newLi.append(checkSpan, newSpan, delBtn)
  todoList.appendChild(newLi);
  todoInput.value = '';
  //checkSpan.addEventListener("click", checkBox)
  checkSpan.addEventListener("click", () => { checkBox(event, newSpan)})
};

const enterKey = (event) => { 
  if (event.code == 'Enter') {
    event.preventDefault();
    onButton();
  }
}

/*const checkBox = (event) => {
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
}*/

function checkBox(event, newSpan) { 
  const text = newSpan;
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

todoInput.addEventListener("input", onInput);
todoButton.addEventListener("click", onButton);