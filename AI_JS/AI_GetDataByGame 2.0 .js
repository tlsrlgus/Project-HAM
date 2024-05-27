function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

function updateLocalStorage(key) {
    let currentValue = localStorage.getItem(key);
    if (currentValue === null) {
        localStorage.setItem(key, '1');
    } else {
        localStorage.setItem(key, (parseInt(currentValue) + 1).toString());
    }
}

function updatenumRL() {
    let numRL = localStorage.getItem('numRL');
    if (numRL === null) {
        localStorage.setItem('numRL', '1');
    } else {
        localStorage.setItem('numRL', (parseInt(numRL) + 1).toString());
    }
}

function getnumRL() {
    let numRL = localStorage.getItem('numRL');
    return numRL === null ? '0' : numRL;
}

function getDataByRL() {
    updatenumRL();
    let turn = 0;
    let currentNumber = 0;
    let ai2Moves = [];

    // AI_1의 첫 번째 턴 (1 또는 2 제시)
    let AI_1 = Math.floor(Math.random() * 2) + 1;
    currentNumber += AI_1;
    turn++;
    console.log("AI_1 (자신): " + AI_1 + " turn: " + turn);
    console.log("currentNumber: " + currentNumber);

    while (currentNumber < 31) {
        // AI_2의 턴
        turn++;
        let AI_2 = getRandomNumber();
        console.log("AI_2: " + AI_2 + " turn: " + turn);
        currentNumber += AI_2;
        ai2Moves.push(`Turn${turn}_TotalNum${currentNumber}_Number${AI_2}`);
        console.log("currentNumber: " + currentNumber);

        if (currentNumber >= 31) {
            console.log("AI_2 패배, AI_1 승리!");
            ai2Moves.forEach(move => {
                updateLocalStorage(`${move}_LOSE`);
                updateLocalStorage(`${move}_TOTAL`);
            });
            console.log(`학습된 수: ${getnumRL()}`);
            break;
        }

        // AI_1의 턴 (AI_2의 숫자와 합이 4가 되도록 제시)
        turn++;
        if (AI_2 === 1) {
            AI_1 = 3;
        } else if (AI_2 === 2) {
            AI_1 = 2;
        } else {
            AI_1 = 1;
        }
        console.log("AI_1 (자신): " + AI_1 + " turn: " + turn);
        currentNumber += AI_1;
        console.log("currentNumber: " + currentNumber);

        if (currentNumber >= 31) {
            console.log("AI_1 패배, AI_2 승리!");
            ai2Moves.forEach(move => {
                updateLocalStorage(`${move}_WIN`);
                updateLocalStorage(`${move}_TOTAL`);
            });
            console.log(`학습된 수: ${getnumRL()}`);
            break;
        }
    }
}
