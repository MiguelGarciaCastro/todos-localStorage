//select DOM elements
var newTodoForm = document.getElementById('new-todo-form')
var newTodoInput = document.getElementById('new-todo')
var todosList = document.getElementById('todos-list')


var todos= ["test", "testsdlf;jas;d", "walk the dog"]

//Loop through todos
for (var i=0; i<todos.length;i++) {

//create a LI
var li = document.createElement('li')
//set the innerText or textcontent
li.innerText = todos[i]
//append into DOM
todosList.appendChild(li)
}


function addTodo(event){
    event.preventDefault()
    var newTodoText = newTodoInput.value
    todos.push(newTodoText)
    newTodoInput.value = ''

}



newTodoForm.addEventListener('submit', addTodo)