// 배터리
let battery = 100;

function batteryLevel() {
  if (battery > 0) {
    battery--;
    document.getElementById("battery").textContent = `🔋 ${battery}%`;
  }

  if (battery === 0) {
    document.querySelector(".box-time").style.backgroundColor = "black";
  }
}

setInterval(batteryLevel, 1000);

// 현재 시간
function updateDateTime() {
  let date = new Date();

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let today = `${year}-${month}-${day}`;

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let time = `${hours}:${minutes}:${seconds}`;

  document.getElementById("current-date").textContent = `${today} ${time}`;
}

setInterval(updateDateTime, 1000);

updateDateTime();

// 다크 모드
function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

document.getElementById("theme").addEventListener("click", toggleMode);
