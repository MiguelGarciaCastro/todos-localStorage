//select DOM elements
var newTodoForm = document.getElementById('new-todo-form')
var newTodoInput = document.getElementById('new-todo')
var todosList = document.getElementById('todos-list')


var todos= JSON.parse(localStorage.getItem('todos'))
console.log(todos)
function renderTodos() {
    todosList.innerHTML = ''
    for (var i = 0; i<todos.length;i++) {
    //create a LI
    var li = document.createElement('li')
    //set the innerText or textcontent
    li.innerText = todos[i]
    //append into DOM
    todosList.appendChild(li)
    }
}

function addTodo(event){
    event.preventDefault()
    var newTodoText = newTodoInput.value
    todos.push(newTodoText)
    localStorage.setItem('todos', JSON.stringify(todos))
    newTodoInput.value = ''
    renderTodos()
}



newTodoForm.addEventListener('submit', addTodo)
renderTodos()