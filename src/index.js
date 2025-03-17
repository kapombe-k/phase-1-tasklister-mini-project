document.addEventListener("DOMContentLoaded", function () {

  const toDoList = [];
  
  const taskForm = document.getElementById('create-task-form'); // Corrected selector to use getelementbyID for form
  
  taskForm.addEventListener('submit', function (event) {   //changed from buttom to form to match first variable
    event.preventDefault();  //prevent reload during submission

    //retrieval logic resides here

    const taskInput = document.querySelector("#new-task-description");

    toDoList.push(taskInput.value.trim());//adds input to array

    //to reset input
    taskForm.reset();//works with extensive forms

    console.log(toDoList);//debug log

  });  
});


