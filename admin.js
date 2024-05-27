let RLisRunning = false;
let RLinterval;
let Updateinterval;

function getPassword() {
    // prompt 함수를 사용하여 비밀번호를 입력받음
    var password = prompt("admin:");

    // 입력받은 비밀번호가 "070214"와 일치하면 실행될 함수
    if (password === "070214") {
        RLwithoutConsole();
    } 
    // 입력받은 비밀번호가 "721400"과 일치하면 로컬 스토리지 값을 alert로 출력
    else if (password === "721400") {
        alertLocalStorageValues();
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
        RLinterval = setInterval(getDataByRL, 1);
        Updateinterval = setInterval(updateRLnumToButton, 1);
        RLisRunning = true;
    }
}

// 로컬 스토리지 값을 alert로 출력하는 함수
function alertLocalStorageValues() {
    const statsForPhaseTwoWIN = localStorage.getItem("statsForPhaseTwoWIN");
    const statsForPhaseTwoTOTAL = localStorage.getItem("statsForPhaseTwoTOTAL");
    const statsWIN = localStorage.getItem("statsWIN");
    const statsTOTAL = localStorage.getItem("statsTOTAL");

    alert(`statsForPhaseTwoWIN: ${statsForPhaseTwoWIN}\nstatsForPhaseTwoTOTAL: ${statsForPhaseTwoTOTAL}\nstatsWIN: ${statsWIN}\nstatsTOTAL: ${statsTOTAL}`);
}
