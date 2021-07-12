document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form")
  form.addEventListener('submit', newTask)
});

const newTask = function(event) {
  event.preventDefault();
let input = event.target.description.value
let color = event.target.selectTaskPriority.value
editTask(input, color);
event.target.description.value = ""
}


const editTask = function(input, color){
let ul = document.querySelector('#tasks');
let li = document.createElement('li');
let deleteTaskButton = document.createElement('button');



li.innerText = input
li.style.color = color
deleteTaskButton.innerText = 'X'



li.append(deleteTaskButton);
ul.appendChild(li);




deleteTaskButton.addEventListener('click', () => li.remove())
}