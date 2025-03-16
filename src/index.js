document.addEventListener("DOMContentLoaded", function ()) {
  
  const button = document.querySelector('create-new task');

  button.addEventListener('click', function ()) {
    console.log('Task created!')
  }
  const list = [];
  
  const taskList = document.getElementById('tasks');

  list.forEach(task) 
    //create a dynamic list using DOM
    const li = document.createElement('li');
    li.innerText = task;

  //attach the added item into the list
  taskList.appendChild(li);
  };
    const taskList = [];

    const addTask = document.querySelector('new-task-description');
    addTask.addEventListener('click', ()) {
  const listItem = document.getElementById('new-task-description').value;

  taskList.push(listItem);
  console.log(taskList);
}
}

