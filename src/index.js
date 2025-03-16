document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('create-task-form'); // Corrected selector to use getelementbyID
  const addTask = document.querySelector("#new-task-description"); // Corrected selector to use ID

  button.addEventListener("click", function () {
    console.log("Task created!");
  });
  const list = [];
  const taskList = document.getElementById("tasks");

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
