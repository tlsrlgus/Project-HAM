let RLisRunning = false;
let RLinterval;
let Updateinterval;

function getPassword() {
    // prompt 함수를 사용하여 비밀번호를 입력받음
    var password = prompt("admin:");

    // 입력받은 비밀번호가 "올바른비밀번호"와 일치하면 실행될 함수
    if (password === "070214") {
        RLwithoutConsole();
    }
}

var adminButton = document.getElementById("adminButton");

// 버튼 클릭 시 getPassword 함수 호출
adminButton.addEventListener("click", function() {
    getPassword();
});

function updateRLnumToButton() {
    document.getElementById("adminButton").innerText = getnumRL();
}

function RLwithoutConsole() {
    if (RLisRunning) {
        clearInterval(RLinterval);
        clearInterval(Updateinterval);
        document.getElementById("adminButton").innerText = "Created by YJH computer club C++";
        RLisRunning = false;
    } else {
        RLinterval = setInterval(getDataByRL, 25);
        Updateinterval = setInterval(updateRLnumToButton, 25);
        RLisRunning = true;
    }
}
