//selcetors
const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-btn')
const burnBtn = document.querySelector('.burn-btn')
const todoList = document.querySelector('.todo-list')

//listeners
todoBtn.addEventListener('click', event => {
    event.preventDefault()
    addtask()
})

burnBtn.addEventListener('click', event => {
    event.preventDefault()
    burn()
})

//fns
const addtask = () => {
    // list item 
    const taskDiv = document.createElement('div')
    taskDiv.classList.add('task')

    //list
    const list = document.createElement('li')
    list.classList.add('todo-item')
    if (todoInput.value == '') {
        return 0
    }
    list.innerText = todoInput.value
    todoInput.value = ''
    taskDiv.appendChild(list)

    //check

    const checkBtn = document.createElement('button')
    checkBtn.classList.add('check')
    checkBtn.innerHTML = '<i class="fas fa-check"></i>'
    taskDiv.appendChild(checkBtn)

    //trash
    const trashBtn = document.createElement('button')
    trashBtn.classList.add('trash')
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
    taskDiv.appendChild(trashBtn)

    //adding to the html
    todoList.appendChild(taskDiv)
}

const burn = () => {
    const items = document.querySelectorAll('.task')
    items.forEach(item => item.remove())
}