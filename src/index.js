document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('create-task-form'); // Corrected selector to use getelementbyID for form
  const addTask = document.querySelector("#new-task-description"); // Corrected selector to use ID for input field
  const taskList = document.getElementById("tasks");//task container selection

  form.addEventListener('submit', function (event) {   //changed from buttom to form to match first variable
    event.preventDefault();  //prevent reload during submission
  });

  //to get input values
  const taskInput = addTask.value;
  
  // const list = []; commented out for now

  list.forEach(function (task) {
    // Added function keyword and fixed syntax
    // Create a dynamic list using DOM
    const li = document.createElement("li");
    li.innerText = task;

    // Attach the added item into the list
    taskList.appendChild(li);
  });
  addTask.addEventListener("click", function () {
    // Fixed syntax
    const listItem = document.getElementById("new-task-description").value;

    taskList.push(listItem);
    console.log(taskList);
  });
});
