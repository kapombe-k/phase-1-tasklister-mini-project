document.addEventListener("DOMContentLoaded", function () {

  const toDoList = [];
  
  const taskForm = document.getElementById('create-task-form'); // Corrected selector to use getelementbyID for form
  
  taskForm.addEventListener('submit', function (event) {   //changed from buttom to form to match first variable
    event.preventDefault();  //prevent reload during submission

    //retrieval logic resides here

    const taskInputText = document.querySelector("#new-task-description").value.trim();

    toDoList.push(taskInputText);//adds input to array

    console.log(toDoList);

  });  

});
