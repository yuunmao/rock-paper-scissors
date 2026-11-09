function getComputerChoice() {
    const compChoices = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random() * compChoices.length);
    return compChoices[i];
}

function getHumanChoice() {
    const input = prompt("Rock Paper Scissors Shoot:");
    return input.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(humanChoice + " vs " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("You win!")
        humanScore++;
    } else {
        console.log("You lose!")
        computerScore++;
    }
}

function playGame() {
    for (let r = 0; r < 5; r++) {
        playRound();
    }

    console.log("Final Score: " + humanScore + "-" + computerScore);

    if (humanScore === computerScore) {
        console.log("Wow! It's a tie!")
    } else if (humanScore > computerScore) {
        console.log("Congrats! You won the game!")
    } else {
        console.log("You lost the game. Better luck next time.")
    }
}

playGame();