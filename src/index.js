document.addEventListener("DOMContentLoaded", function () {

  const toDoList = [];
  
  const taskForm = document.getElementById('create-task-form'); // Corrected selector to use getelementbyID for form
  
  taskForm.addEventListener('submit', function (event) {   //changed from buttom to form to match first variable
    event.preventDefault();  //prevent reload during submission

    console.log('working');
  });  

});
