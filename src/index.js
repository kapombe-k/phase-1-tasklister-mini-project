document.addEventListener("DOMContentLoaded", () => {
  // task list starts here:
  const listedTask = new tasker();

  /*
  DOM elements to select:
  *form, task description, task priority
 */
  
  const taskForm = document.getElementById("create-task-form"); //form list//
  const taskDescription = document.getElementById("new-task-description");//description//
  const taskPriority = document.getElementById("new-task-priority");//priority//

  //tasks list on DOM interaction
  const ulForTasks = document.getElementById("tasks");

  const addTask = () => (ulForTasks.innerHTML = listedTask.renderTasks());

  //addition of event listeners

  newTaskList.addEventListener("submit", (stopper)) = () => {
    stopper.preventDefault();
    tasker.creareNewTask(taskDescription.value);
    
  }
});