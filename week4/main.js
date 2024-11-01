// 현재 날짜 정보
let today = document.getElementById("today-info");
let date = new Date();
today.textContent = date.toDateString();

// 일정 추가
document.getElementById("addButton").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText) {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("일정을 입력하세요.");
  }
});
