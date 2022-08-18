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