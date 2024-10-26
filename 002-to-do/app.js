const addBtn = document.querySelector(".btn");
const listContainer = document.querySelector(".list-container");
const input = document.querySelector(".input");

addBtn.addEventListener("click", addTodo);

function addTodo() {
  const todo = input.value;
  input.value = "";

  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("div");

  span.innerHTML = todo;
  deleteBtn.classList.add("btn-delete");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteTodo.bind(this, li));

  li.appendChild(span);
  li.appendChild(deleteBtn);

  listContainer.appendChild(li);
}

function deleteTodo(todo) {
  listContainer.removeChild(todo);
}
