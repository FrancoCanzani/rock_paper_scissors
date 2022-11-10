// Function to define the computer choice

let values = ["rock", "paper", "scissors"];
let index = Math.floor(Math.random() * values.length);

function getComputerChoice() {
  return values[index];
}

