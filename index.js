// Generate a random choice
function getComputerChoice() {
    let r = Math.floor(Math.random() * 3) + 1;
    switch (r) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

// console.log(getComputerChoice())

// Given 2 selections, check who won
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player === computer) {
        return "Tied";
    }

    switch (player) {
        case "rock":
            if (computer === "paper") {
                return "You Lose! Paper beats Rock"
            }
            if (computer === "scissors") {
                return "You Won! Rock beats Scissors"
            }
        case "paper":
            if (computer === "scissors") {
                return "You Lose! Scissors beats paper"
            }
            if (computer === "rock") {
                return "You Won! Paper beats Rock"
            }
        case "scissors":
            if (computer === "rock") {
                return "You Lose! Rock beats Scissors"
            }
            if (computer === "paper") {
                return "You Win! Scissors beats paper"
            }
    }
}

// console.log(playRound("RoCk", getComputerChoice()))

function game() {
    let player = 0, computer = 0;
    for (let i = 0; i < 5; i++) {
        let round = playRound(prompt('Rock Paper Scissors'), getComputerChoice());
        console.log(round);
        if (round[4] === "W") {
            player++;
        } else if (round[4] === "L") {
            computer++;
        } else {
            player++;
            computer++;
        }
    }
    console.log(player === computer ? "TIED" : player > computer ? "YOU WON!" : "YOU LOST")
    console.log(`Score: ${player} - ${computer}`);
}

game();