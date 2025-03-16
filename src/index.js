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

  // Added function keyword and fixed syntax
  list.forEach(function (task) {
    // Create a dynamic list using DOM
    const li = document.createElement("li");
    li.innerText = taskInput;//list items text

    
    taskList.appendChild(li);
  
    taskList.push(listItem);
    console.log(taskList);
  });
});
