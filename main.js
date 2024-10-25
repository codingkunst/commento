let display = document.getElementById("display");
let currentInput = "";

function appendToDisplay(value) {
  if (display.innerText === "0") display.innerText = ""; // 초기화된 상태에서 입력
  display.innerText += value;
  currentInput += value;
}

// 결과 표시
function calculate() {
  try {
    let result = eval(currentInput);
    display.innerText = result;
    currentInput = result.toString(); // 계산 후 결과값으로 초기화
  } catch (error) {
    display.innerText = "Error";
    currentInput = "";
  }
}

// 초기화
function clearDisplay() {
  display.innerText = "0";
  currentInput = "";
}
