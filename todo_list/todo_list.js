// Select HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

// Create an empty array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim(); // Get text from input and remove extra spaces
    if (taskText !== "") {                   // Only add if input is not empty
        tasks.push({ text: taskText, completed: false }); // Add task with completed set to false
        taskInput.value = "";                 // Clear input field
        displayTasks();                       // Update the displayed task list
    }
}

// Function to display all tasks
function displayTasks() {
    taskList.innerHTML = ""; // Clear the existing list

    tasks.forEach((task, index) => {
        // Create a new <li> element for the task
        const li = document.createElement("li");

        //Create a checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `task-${index}`;
        checkbox.checked = task.completed; // Check the box if task is completed
        checkbox.addEventListener("change", () => toggleTask(index)); // Toggle completed status on change

        //Create a label for the task text
        const label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.textContent = task.text;

        //Append checkbox and label to <li>
        li.appendChild(checkbox);
        li.appendChild(label);

        //Append <li> to the task list
        taskList.appendChild(li);
    });
}

// Function to toggle the completed status of a task
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed; // Switch true ↔ false
    displayTasks(); // Update the displayed list
}

// Function to clear all completed tasks
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed); // Keep only incomplete tasks
    displayTasks(); // Update the displayed list
}

// Add event listeners to buttons
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

displayTasks();
