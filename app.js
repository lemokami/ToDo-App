//selcetors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const burnBtn = document.querySelector(".burn-btn");
const todoList = document.querySelector(".todo-list");

//listeners
document.addEventListener("DOMContentLoaded", () => getTasks());
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
  const task = todoInput.value;
  addTostorage(task);
  list.innerText = task;
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

// Clearing all the tasks
const burn = () => {
  const items = document.querySelectorAll(".task");
  items.forEach((item) => {
    item.classList.add("delprep");
    item.addEventListener("transitionend", () => item.remove());
  });
  localStorage.setItem("tasks", JSON.stringify([]));
};

const delTask = (task) => {
  task.classList.add("delprep");
  delfrmStorage(task.innerText);
  task.addEventListener("transitionend", () => task.remove());
};

const checkTask = (task) => task.classList.toggle("complete");

// Adding each task to the storage
const addTostorage = (task) => {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Display saved Tasks
const getTasks = () => {
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    return 0;
  }
  tasks = JSON.parse(localStorage.getItem("tasks"));

  tasks.forEach((task) => {
    // list item
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    //list
    const list = document.createElement("li");
    list.classList.add("todo-item");
    list.innerText = task;
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
  });
};

// Deleting Tasks
const delfrmStorage = (task) => {
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    return 0;
  }

  tasks = JSON.parse(localStorage.getItem("tasks"));

  const index = tasks.indexOf(task);

  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
