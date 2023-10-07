
  const taskList = $(".task");
  let task = JSON.parse(localStorage.getItem("myTask")) || [];
  
  displayTask();
  
  function displayTask() {
    $(taskList).empty();
    task.forEach((item, index) => {
      const taskItem = `<li class="task-item"> 
      <div class="details">
        <input type="checkbox"  name="task" id="task">
        <label class="task">${item}</label>
        </div>
        <div class="info">
        <label onclick="deleteItem(${index})" name="${index}" class="delete">\u00d7</label>
        <label edit-index="${index}" class="edit">Edit</label>
        </div>
      </li>`;
      $(taskList).append(taskItem);
    });
  }
  
  function addTask() {
    const taskInput = $(".text-input").val();
    if (taskInput === "") {
      alert("Please type something");
      return;
    }
    task.push(taskInput);
    localStorage.setItem("myTask", JSON.stringify(task));
    displayTask();
    $(".text-input").val(''); // Fix: Set the input field value to an empty string
  }
  
  function deleteItem(index) {
    task = task.filter((item, Itemindex) => Itemindex != index);
    localStorage.setItem("myTask", JSON.stringify(task));
    displayTask();
  }





