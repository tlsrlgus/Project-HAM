const turnAlert = document.getElementById("turnAlert")
const currentNumberDisplay = document.getElementById("currentNumberDisplay")



const buttonONE = document.getElementById("button-1")
const buttonTWO = document.getElementById("button-2")
const buttonTHREE = document.getElementById("button-3")




let turn = 1;
let currentNumber = 0;
let gameEND = false












function game(playerNumber) {

    if (gameEND === true || turnAlert.innerText === "AI가 생각중입니다") {

        console.log("Game was ended or stoped")

    }else {

        currentNumber = currentNumber + playerNumber

        
        if (currentNumber >= 31) {
            gameEND = true
            currentNumberDisplay.innerText = "당신의 패배입니다! 5초 뒤 리셋됩니다"
            turnAlert.innerText = `패배..`
            
            setTimeout(resetGame, 5000)
            stats("win")
            
            

        } else {
            turn ++
            currentNumberDisplay.innerText = `현재 턴: ${turn} \n 현재 수: ${currentNumber}`
            turnAlert.innerText = "AI가 생각중입니다"

        }




        setTimeout(function () {
            currentNumber = currentNumber + upgradedGetBestMove(turn, currentNumber)

            if (currentNumber >= 31 && gameEND === false) {
                gameEND = true
                currentNumberDisplay.innerText = "당신의 승리입니다! 5초 뒤 리셋됩니다"
                turnAlert.innerText = `승리!`
                
                setTimeout(resetGame, 5000)
                stats("lose")
                
    
            } else if (gameEND === false){
                turn ++
                currentNumberDisplay.innerText = `현재 턴: ${turn} \n 현재 수: ${currentNumber}`
                turnAlert.innerText = `당신의 차례입니다`
    
            }
            

                     



        }, 1000)
   
    }

}









function resetGame() {
    turn = 1
    currentNumber = 0
    currentNumberDisplay.innerText = "1~3의 숫자를 선택하세요"
    turnAlert.innerText = "당신의 차례입니다"
    gameEND = false
    




}






function stats(result) {
    if (result === "win") {
      // 이전에 저장된 statsWIN 값을 가져옵니다.
      let wins = Number(localStorage.getItem("statsWIN")) || 0;
  
      // 승리 횟수를 1 증가시킵니다.
      wins++;
  
      // 업데이트된 승리 횟수를 저장합니다.
      localStorage.setItem("statsWIN", wins);
    } else if (result === "lose") {
      // 이전에 저장된 statsLOSE 값을 가져옵니다.
      let loses = Number(localStorage.getItem("statsLOSE")) || 0;
  
      // 패배 횟수를 1 증가시킵니다.
      loses++;
  
      // 업데이트된 패배 횟수를 저장합니다.
      localStorage.setItem("statsLOSE", loses);
    }

    let total = Number(localStorage.getItem("statsTOTAL")) || 0;
  
    // 패배 횟수를 1 증가시킵니다.
    total++;

    // 업데이트된 패배 횟수를 저장합니다.
    localStorage.setItem("statsTOTAL", total);

    document.getElementById("winRate").innerText = `승률 ${((parseInt(Number(localStorage.getItem("statsWIN")))/parseInt(Number(localStorage.getItem("statsTOTAL"))))*100).toFixed(2)}%`


    

}



document.getElementById("winRate").innerText = `승률 ${((parseInt(Number(localStorage.getItem("statsWIN")))/parseInt(Number(localStorage.getItem("statsTOTAL"))))*100).toFixed(2)}%` || 0;
