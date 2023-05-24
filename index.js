function getComputerChoice() {
    const compSel = Math.floor(Math.random() * 3);
    if(compSel == 0) {
        return "ROCK";
    } else if(compSel == 1) {
        return "SCISSORS";
    } else {
        return "PAPER";
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() == "ROCK") {
        if(computerSelection == "ROCK") {
            console.log("You Tie! ROCK ties ROCK")
            return "TIE";
        } else if(computerSelection == "PAPER") {
            console.log("You Lose! PAPER beats ROCK")
            return "COMPUTER";
        } else {
            console.log("You Win! ROCK beats SCISSORS")
            return "PLAYER";
        }
    } else if(playerSelection.toUpperCase() == "SCISSORS") {
        if(computerSelection == "SCISSORS") {
            console.log("You Tie! SCISSORS ties SCISSORS")
            return "TIE";
        } else if(computerSelection == "ROCK") {
            console.log("You Lose! ROCK beats SCISSORS")
            return "COMPUTER";
        } else {
            console.log("You Win! SCISSORS beats PAPER")
            return "PLAYER";
        }
    } else {
        if(computerSelection == "PAPER") {
            console.log("You Tie! PAPER ties PAPER")
            return "TIE";
        } else if(computerSelection == "SCISSORS") {
            console.log("You Lose! SCISSORS beats PAPER")
            return "COMPUTER";
        } else {
            console.log("You Win! PAPER beats ROCK")
            return "PLAYER";
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let sign = prompt("Type Your Choice (ROCK) (SCISSORS) (PAPER): ");
        let winner = playRound(sign, getComputerChoice());
        if(winner == "PLAYER") {
            playerScore++;
        }
        else if(winner == "COMPUTER") {
            computerScore++;
        }
        console.log("Score:  Player: " + playerScore + " Computer: " + computerScore);
    }

    if(playerScore > computerScore) {
        console.log("YOU WON!");
    } else if(playerScore < computerScore) {
        console.log("YOU LOST :(");
    } else {
        console.log("IT'S TIE ==");
    }
}

game();