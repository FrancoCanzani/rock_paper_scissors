// Function to define the computer choice

let values = ["rock", "paper", "scissors"];
let index = Math.floor(Math.random() * values.length);

function getComputerChoice() {
  return values[index];
}


function playRound(playerSelection, computerSelection) {

// Loses
  if (playerSelection == "rock" && computerSelection == "paper") {

    return ("You lose!");
  }

  if (playerSelection == "paper" && computerSelection == "scissors") {

    return ("You Lose!");
  }

  if (playerSelection == "scissors" && computerSelection == "rock") {

    return ("You Lose!");
  }

// Wins
  if (playerSelection == "rock" && computerSelection == "scissors") {

    return ("You Win!");
  }

  if (playerSelection == "paper" && computerSelection == "rock") {

    return ("You Win!");
  }

  if (playerSelection == "scissors" && computerSelection == "paper") {

    return ("You Win!");
  }

// Ties
  else if (playerSelection == computerSelection) {

    return ("It is a tie!");
  }

}

playerSelection = prompt("Please type rock, paper or scissors! Good luck!").toLowerCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
