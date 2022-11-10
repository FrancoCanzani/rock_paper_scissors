// Function to define the computer choice

let values = ["rock", "paper", "scissors"];
let index = Math.floor(Math.random() * values.length);

function getComputerChoice() {
  return values[index];
}

let computerChoice = getComputerChoice();
let userChoice = (prompt("Please select rock, paper or scissors."));
userChoice = userChoice.toLowerCase();

/* Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation). */

function roundOfGame(userChoice, computerChoice) {
  
  if (userChoice === computerChoice) {
    return("It is a tie");
  } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice == "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
    return("Player wins!")
  } else {
    return("Computer wins!")
  }
}

console.log(roundOfGame(userChoice, computerChoice));