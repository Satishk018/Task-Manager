function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskHistory = document.getElementById("taskHistory");

  const taskValue = taskInput.value.trim();
  if (taskValue === "") return;

  // Create task element
  const li = document.createElement("li");
  li.className = "task";

  // ✅ Checkbox button
  const checkBtn = document.createElement("button");
  checkBtn.innerHTML = "✔️";
  checkBtn.onclick = () => {
    taskText.classList.toggle("done");
  };

  // 📄 Task text
  const taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.textContent = taskValue;

  // ❌ Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "❌";
  deleteBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(checkBtn);
  li.appendChild(taskText);
  li.appendChild(deleteBtn);

  taskHistory.appendChild(li);
  taskInput.value = "";
}
