const users = [];

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let isValid = true;

    // 아이디 중복 체크
    if (users.includes(username)) {
      document.getElementById("usernameError").textContent =
        "이미 사용 중인 아이디입니다.";
      isValid = false;
    } else {
      document.getElementById("usernameError").textContent = "";
    }

    // 비밀번호 규칙 체크 (최소 8자, 대문자, 소문자, 숫자 포함)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      document.getElementById("passwordError").textContent =
        "비밀번호는 최소 8자 이상, 대문자, 소문자, 숫자를 포함해야 합니다";
      isValid = false;
    } else {
      document.getElementById("passwordError").textContent = "";
    }

    // 모든 조건을 만족하면 사용자 정보를 배열에 추가
    if (isValid) {
      alert('회원가입 완료!')
      users.push(username);
      document.getElementById("signupForm").reset(); // 폼 초기화
    }
  });
