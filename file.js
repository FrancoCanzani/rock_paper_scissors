// Setting the game score to 0
let userScore = 0;
let computerScore = 0;


// Access the HTML buttons
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');



// Main game function

function game() {

  let values = ["rock", "paper", "scissors"]; /* The possibilities the computer can choose */
  let index = Math.floor(Math.random() * values.length); /* I use the random built in function to randomly pick a value from the array */

  function getComputerChoice() { /* Function for the computer choice */
    return values[index];
  }

  let computerChoice = getComputerChoice();

  function roundOfGame(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
    
    } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice == "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
    player.innerText = userScore+=1;
    } else {
    computer.innerText = computerScore+=1;
    }
  }

  roundOfGame(userChoice, computerChoice);

}


rock.addEventListener("click", function(){
  return(userChoice = 'rock', game())
});

paper.addEventListener("click", function(){
  return(userChoice = 'paper', game());
});

scissors.addEventListener("click", function(){
  return(userChoice = 'scissors', game());
});