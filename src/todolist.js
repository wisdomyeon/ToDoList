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
  
  const textSpan = document.createElement("span");
  textSpan.textContent = storageData ? storageData.contents : newTodo;

  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";

  newLi.append(checkSpan, textSpan, delBtn)
  todoList.appendChild(newLi);
  todoInput.value = '';

  checkSpan.addEventListener("click", checkBox)
  delBtn.addEventListener("click", deleteTodo)

  if (storageData) {
    //textSpan.textContent = storageData.contents;
    if (storageData.complete === true) {
      checkSpan.innerHTML = "✅";
      checkSpan.classList.add("check"); 
      textSpan.classList.add("complete");
    } else {
      checkSpan.innerHTML = "⬜";
      checkSpan.classList.remove("check"); 
      textSpan.classList.remove("complete");
    }
  }

  const todoObj = {
    id: newId,
    contents: textSpan.textContent,
    complete: checkSpan.classList.contains("check"),
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
  const box = event.target;
  const text = event.target.nextElementSibling;
  const li = event.target.parentNode;
  const check = box.classList.contains("check");

  if (!check) {
    saveText.forEach((todo, i) => {
      event.target.innerHTML = "✅";
      box.classList.add("check");
      text.classList.add("complete");
      if (todo.id == li.id) {
        todo.complete = true;
        saveTodo();
      }
    })
  } else {
    saveText.forEach((todo, i) => {
      event.target.innerHTML = "⬜";
      box.classList.remove("check");
      text.classList.remove("complete");
      if (todo.id == li.id) {
        todo.complete = false;
        saveTodo();
      }
    })
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
  savedTodoList.forEach((todo, i) => { 
    onButton(todo);
  })
}

todoInput.addEventListener("input", onInput);
todoButton.addEventListener("click", () => {onButton()});