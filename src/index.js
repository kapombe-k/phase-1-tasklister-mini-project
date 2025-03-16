document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('create-task-form'); // Corrected selector to use getelementbyID for form
  const addTask = document.querySelector("#new-task-description"); // Corrected selector to use ID for input field
  const taskList = document.getElementById("tasks");//task container selection

  form.addEventListener('submit', function (event) {   //changed from buttom to form to match first variable
    event.preventDefault();  //prevent reload during submission
  });

  //to get input values
  const taskInput = addTask.value;

  //trying an additional if...else statement to validate text input.
  if (taskInput !== '') {
    addTaskToList(taskInput);//function to add task
    addTask.value = '';
  } else {
    alert("Enter task here!")//alert when field is empty
}
// const list = []; commented out for now

// Added function keyword and fixed syntax for task list
function addTaskToList(taskInput){
  // Create a dynamic list using DOM to add and remove tasks
  const li = document.createElement("li");
  li.innerText = taskInput;//list items text
  
  //delete task button
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Remove';
  deleteButton.addEventListener('click', function () {
    li.remove();
  });
  li.appendChild(deleteButton);//delete button at end of task
  
  taskList.appendChild(li);
};
