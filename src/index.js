document.addEventListener("DOMContentLoaded", function () {

  const toDoList = [];
  
  const taskForm = document.getElementById('create-task-form'); // Corrected selector to use getelementbyID for form
  
  taskForm.addEventListener('submit', function (event) {   //changed from buttom to form to match first variable
    event.preventDefault();  //prevent reload during submission
    
    const addTask = document.querySelector("#new-task-description"); // Corrected selector to use ID for input field
    
    //to get input values
    const taskInput = addTask.value.trim();
  
    //to store the todo inside the toDoList array
    toDoList.push(taskInput.value);
  
  
    //reset form
    taskForm.reset();

    //iterate through array and outputs
    renderToDoList(toDoList)
  });


  //trying an additional if...else statement to validate text input.
  //if (taskInput !== '') {
    //addTaskToList(taskInput);//function to add task
    //addTask.value = '';
  //} else {
    //alert("Enter task here!")//alert when field is empty
  //
   
  const taskList = document.getElementById("tasks");//task container selection
  
  // Added function keyword and fixed syntax for task list
  function addTaskToList(taskInput) {
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
  }
});
