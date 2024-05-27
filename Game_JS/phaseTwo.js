let isItFirstTurn = true;




function phaseTwoStart() {
    applyRedTheme()
    phaseTwo = true
    turn = 0
    currentNumber = 0
    gameEND = false
    currentPhase = 2
    turnAlert.innerText = "AI가 생각중입니다"
    currentNumberDisplay.innerText = `현재 페이즈: ${currentPhase} \n현재 수: ${currentNumber}`
    setTimeout(phaseTwoGame, 2000)




}




function phaseTwoGame(playerNumber) {
    turn++;
    currentNumber += playerNumber;
    currentNumberDisplay.innerText = `현재 페이즈: ${currentPhase}\n 현재 수: ${currentNumber}`;





    if (isItFirstTurn) {
        isItFirstTurn = false;
        currentNumber = Math.floor(Math.random() * 2) + 1;
        turn++;
        currentNumberDisplay.innerText = `현재 페이즈: ${currentPhase}\n 현재 수: ${currentNumber}`;
        turnAlert.innerText = "당신의 차례입니다";


    } else if (currentNumber >= 31) {
        gameEND = true;
        currentNumberDisplay.innerText = "당신의 패배입니다! 5초 뒤 리셋됩니다";
        turnAlert.innerText = "패배..";

        statsForPhaseTwo("win");
        setTimeout(resetGame, 5000);
        

    } else {
        // AI의 움직임 결정
        turnAlert.innerText = "AI가 생각중입니다"
        setTimeout(function () {
            let aiNumber = getBestMoveForPhaseTwo(currentNumber);
            currentNumber += aiNumber;


            if (currentNumber >= 31) {
                gameEND = true;
                currentNumberDisplay.innerText = "당신의 승리입니다! 10초 뒤 리셋됩니다";
                turnAlert.innerText = "승리!";
                
                statsForPhaseTwo("lose");
                setTimeout(resetGame, 10000);
                
            } else {

                turn++;
                currentNumberDisplay.innerText = `현재 페이즈: ${currentPhase}\n 현재 수: ${currentNumber}`;
                turnAlert.innerText = "당신의 차례입니다";
            }

        }, 1000)
        
    }
}






function getBestMoveForPhaseTwo(currentNumber) {
    const targetNumbers = [2, 6, 10, 14, 18, 22, 26, 30];
    
    // 1순위: 현재 수에 1~3의 수를 더해 다음 수를 만들 수 있다면 그것을 제시
    for (let i = 1; i <= 3; i++) {
        if (targetNumbers.includes(currentNumber + i)) {
            return i;
        }
    }

    // 2순위: 상대방이 낸 수 + AI가 낸 수가 총 합 4가 되도록 AI는 1~3의 수를 제시
    let playerNumber = currentNumber % 4;
    if (playerNumber > 0 && playerNumber <= 3) {
        return 4 - playerNumber;
    }

    // 3순위: 1~3의 수를 랜덤으로 제시
    return Math.floor(Math.random() * 3) + 1;
}




