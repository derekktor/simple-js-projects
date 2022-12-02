const MOVES = ["rock", "paper", "scissor"];
const LIMIT = 5;

let userScore = 0;
let computerScore = 0;

updateScoreboard();

function updateScoreboard() {
    document.querySelector("#userScore").innerText = userScore;
    document.querySelector("#computerScore").innerText = computerScore;
}

function playRound(userMove, computerMove) {
    let winner;
    if (
        (userMove === "rock" && computerMove === "paper") ||
        (userMove === "paper" && computerMove === "scissor") ||
        (userMove === "scissor" && computerMove === "rock")
    ) {
        winner = "computer";
        computerScore++;
    } else if (
        (computerMove === "rock" && userMove === "paper") ||
        (computerMove === "paper" && userMove === "scissor") ||
        (computerMove === "scissor" && userMove === "rock")
    ) {
        winner = "user";
        userScore++;
    } else if (
        (computerMove === "rock" && userMove === "rock") ||
        (computerMove === "paper" && userMove === "paper") ||
        (computerMove === "scissor" && userMove === "scissor")
    ) {
        winner = "draw";
    } else {
        throw new Error("Invalid data entered");
    }

    if (userScore === LIMIT) {
        alert("You are a winner!!!");
        return;
    } else if (computerScore === LIMIT) {
        alert("You are a loser!!!");
        return;
    }

    return winner;
}

function getComputerChoice() {
    const idx = Math.floor(Math.random() * MOVES.length);
    return MOVES[idx];
}

function displayResult(userSelection, computerSelection, result) {
    let output = "";

    output += `User: ${userSelection}<br/>`;
    output += `Computer: ${computerSelection}<br/>`;

    switch (result) {
        case "user":
            output += `You won!`;
            break;
        case "computer":
            output += `You lost!`;
            break;
        case "draw":
            output += `Draw!`;
            break;
    }

    updateScoreboard();

    document.querySelector("#result").innerHTML = output;
}

// When user submits
function handleUserInput() {
    // Get user's move
    const userSelection = document.querySelector("#userInput").value;
    // Get computer's move
    const computerSelection = getComputerChoice();

    // Compare moves
    const result = playRound(userSelection, computerSelection);

    // Display result
    displayResult(userSelection, computerSelection, result);

    // Clear user input
    document.querySelector("#userInput").value = "";
}

// Event: Handle user input submit
document.querySelector("#submitBtn").addEventListener("click", handleUserInput);
