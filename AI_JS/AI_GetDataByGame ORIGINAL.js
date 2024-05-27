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

    for (let i = 0; i <= 30;) {
        let AI_1 = getRandomNumber();
        let AI_2 = getRandomNumber();

        turn++;
        console.log("AI_1:" + AI_1 + " turn:" + turn);
        currentNumber = AI_1 + currentNumber;
        console.log("currentNumber:" + currentNumber);

        if (currentNumber >= 31) {
            console.log("AI_1 패배, AI_2 승리!");
            ai2Moves.forEach(move => {
                updateLocalStorage(`${move}_WIN`);
                updateLocalStorage(`${move}_TOTAL`);
            });
            console.log(`학습된 수: ${getnumRL()}`);
            break;
        }

        turn++;
        console.log("AI_2:" + AI_2 + " turn:" + turn);
        ai2Moves.push(`Turn${turn}_TotalNum${currentNumber}_Number${AI_2}`);
        currentNumber = AI_2 + currentNumber;
        console.log("currentNumber:" + currentNumber);

        if (currentNumber >= 31) {
            console.log("AI_2 패배, AI_1 승리!");
            ai2Moves.forEach(move => {
                updateLocalStorage(`${move}_LOSE`);
                updateLocalStorage(`${move}_TOTAL`);
            });
            console.log(`학습된 수: ${getnumRL()}`);
            break;
        }
    }
}
