// Define an array to store tasks
let tasks = [];

// Define a task object constructor
function Task(id, title, completed) {
  this.id = id;
  this.title = title;
  this.completed = completed;
}

// Function to add a new task to the tasks array
function addTask(title) {
  const newTask = new Task(tasks.length + 1, title, false);
  tasks.push(newTask);
}

// Function to mark a task as completed
function completeTask(taskId) {
  const task = tasks.find(task => task.id === taskId);
  if (task) {
    task.completed = true;
  }
}

// Function to display all tasks
function displayTasks() {
  console.log("Tasks:");
  for (const task of tasks) {
    const status = task.completed ? "✔️" : "❌";
    console.log(`[${status}] Task ${task.id}: ${task.title}`);
  }
}

// Add some initial tasks
addTask("Buy groceries");
addTask("Finish homework");
addTask("Go for a run");

// Complete a task
completeTask(2);

// Display all tasks
displayTasks();
