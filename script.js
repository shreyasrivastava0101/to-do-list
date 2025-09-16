function addTask() {
    const taskInput = document.getElementById("taskInput");
    const tasks = document.getElementById("tasks");

    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox"> ${taskInput.value}`;
        tasks.appendChild(li);
        taskInput.value = ""; // clear input
    }
}
