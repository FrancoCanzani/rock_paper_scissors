// Access the HTML buttons
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const buttons = document.querySelectorAll('.rock, .paper, .scissors');
const scanner = document.querySelector('.scanner')
const resetBtn = document.querySelector('.playAgain')

// Setting the game score to 0
let userScore = 0;
let computerScore = 0;

player.innerText = userScore;
computer.innerText = computerScore;

function disableButtons() {
  buttons.forEach(elem => {
      elem.disabled = true
  })
}

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
      scanner.innerText = "It is a tie!"
    } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice == "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
      player.innerText = userScore+=1;
      scanner.innerText = "You win the round!"
      if (userScore == 5) {
        disableButtons()
        scanner.innerText = "You win the game 🥳!"
      }
    } else {
    computer.innerText = computerScore+=1;
    scanner.innerText = "You lose the round!"
    if (computerScore == 5) {
      disableButtons()
      scanner.innerText = "You lost the game 🤦‍♂️!"

  }
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

resetBtn.addEventListener('click',() => location.reload());
