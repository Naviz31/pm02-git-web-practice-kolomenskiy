import { practiceTasks } from "./modules/tasks.js";

const taskList = document.querySelector("#task-list");

function renderTasks(tasks) {
  taskList.innerHTML = tasks
    .map(
      (task) =>
        `<li><strong>${task.title}</strong><br>${task.description}<br><span class="task-status">${task.status}</span></li>`
    )
    .join("");
}

renderTasks(practiceTasks);
