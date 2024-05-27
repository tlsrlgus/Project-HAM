function calculateWinRate(turn, totalNum, number) {
    let totalKey = `Turn${turn}_TotalNum${totalNum}_Number${number}_TOTAL`;
    let winKey = `Turn${turn}_TotalNum${totalNum}_Number${number}_WIN`;
    let total = localStorage.getItem(totalKey);
    let win = localStorage.getItem(winKey);

    if (total === null || total === '0') {
        return 0;  // 승률을 0으로 반환
    }

    if (win === null) {
        win = '0';
    }

    let winRate = (parseInt(win) / parseInt(total)) * 100;
    return winRate;
}





function getBestMove(turn, totalNum) {
    let bestMove = 1;
    let highestWinRate = calculateWinRate(turn, totalNum, 1);

    for (let number = 2; number <= 3; number++) {
        let winRate = calculateWinRate(turn, totalNum, number);
        if (winRate > highestWinRate) {
            highestWinRate = winRate;
            bestMove = number;
        }
    }

    console.log(`Turn: ${turn}, TotalNum: ${totalNum}, BestMove: ${bestMove}, WinRate: ${highestWinRate.toFixed(2)}%`);
    return bestMove;
}






