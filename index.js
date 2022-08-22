const buttons = document.querySelectorAll('.choice');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => playRound(buttons[i].id, getComputerChoice()));
}

// Generate a random choice
function getComputerChoice() {
    let r = Math.floor(Math.random() * 3) + 1;
    switch (r) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

let
    text = document.getElementById('text'),
    playerScore = document.getElementById('player-score'),
    computerScore = document.getElementById('computer-score'),
    player = 0,
    computer = 0;

// Given 2 selections, check who won
function playRound(playerSelection, computerSelection) {

    console.log(playerSelection, computerSelection);

    if (playerSelection === computerSelection) {
        text.textContent = "Tied";
        // computer++;
        // player++;
        // playerScore.textContent = player;
        // computerScore.textContent = computer;
    } else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "paper") {
                    text.textContent = "You Lose! Paper beats Rock"
                    computer++;
                }
                if (computerSelection === "scissors") {
                    text.textContent = "You Won! Rock beats Scissors"
                    player++;
                }
                break;
            case "paper":
                if (computerSelection === "scissors") {
                    text.textContent = "You Lose! Scissors beats paper"
                    computer++;
                }
                if (computerSelection === "rock") {
                    text.textContent = "You Won! Paper beats Rock"
                    player++;
                }
                break;
            case "scissors":
                if (computerSelection === "rock") {
                    text.textContent = "You Lose! Rock beats Scissors"
                    computer++;
                }
                if (computerSelection === "paper") {
                    text.textContent = "You Win! Scissors beats paper"
                    player++;
                }
                break;
        }
    }

    playerScore.textContent = player;
    computerScore.textContent = computer;

    if (player >= 5 || computer >= 5) {
        if (player === computer) {
            text.textContent = "EPIC TIE";
            player = 0;
            computer = 0;
        } else if (player === 5) {
            text.textContent = "YOU WON";
            player = 0;
            computer = 0;
        } else if (computer === 5) {
            text.textContent = "YOU LOST";
            player = 0;
            computer = 0;
        }
    }

}
