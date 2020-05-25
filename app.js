//selcetors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const burnBtn = document.querySelector(".burn-btn");
const todoList = document.querySelector(".todo-list");

//listeners
todoBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addtask();
});

burnBtn.addEventListener("click", (event) => {
  event.preventDefault();
  burn();
});

todoList.addEventListener("click", (event) => {
  const item = event.target;
  if (item.classList[0] === "trash") {
    delTask(item.parentElement);
  } else if (item.classList[0] === "check") {
    checkTask(item.parentElement);
  }
});

//fns
const addtask = () => {
  // list item
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  //list
  const list = document.createElement("li");
  list.classList.add("todo-item");
  if (todoInput.value == "") {
    return 0;
  }
  list.innerText = todoInput.value;
  todoInput.value = "";
  taskDiv.appendChild(list);

  //check

  const checkBtn = document.createElement("button");
  checkBtn.classList.add("check");
  checkBtn.classList.add("btn");
  checkBtn.innerHTML = '<i class="fas fa-check"></i>';
  taskDiv.appendChild(checkBtn);

  //trash
  const trashBtn = document.createElement("button");
  trashBtn.classList.add("trash");
  trashBtn.classList.add("btn");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  taskDiv.appendChild(trashBtn);

  //adding to the html
  todoList.appendChild(taskDiv);
};

const burn = () => {
  const items = document.querySelectorAll(".task");
  items.forEach((item) => {
    item.classList.add("delprep");
    item.addEventListener("transitionend", () => item.remove());
  });
};

const delTask = (task) => {
  task.classList.add("delprep");
  task.addEventListener("transitionend", () => task.remove());
};

const checkTask = (task) => task.classList.toggle("complete");
