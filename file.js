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

// Function that disables the buttons when one player gets to 5 points
function disableButtons() {
  buttons.forEach(elem => {
      elem.disabled = true
  })
}

let result_rock = '🪨';
let result_paper = '🧻';
let result_scissors = '✂️'

// Main game function

function game() {

  let values = [result_rock, result_paper, result_scissors]; /* The possibilities the computer can choose */
  let index = Math.floor(Math.random() * values.length); /* I use the random built in function to randomly pick a value from the array */

  function getComputerChoice() { /* Function for the computer choice */
    return values[index];
  }

  let computerChoice = getComputerChoice();


  function roundOfGame(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
      scanner.innerText = `${userChoice} = ${computerChoice}`
    } else if ((userChoice === result_rock && computerChoice === result_scissors) || (userChoice === result_paper && computerChoice == result_rock) || (userChoice === result_scissors && computerChoice === result_paper)) {
      player.innerText = userScore+=1;
      scanner.innerText = `${userChoice} > ${computerChoice}`
      if (userScore == 5) {
        disableButtons()
        scanner.innerText = "You win the game 🥳!"
      }
    } else {
    computer.innerText = computerScore+=1;
    scanner.innerText = `${userChoice} < ${computerChoice}`
    if (computerScore == 5) {
      disableButtons()
      scanner.innerText = "You lose the game 🤦‍♂️!"

  }
    }
  }

  roundOfGame(userChoice, computerChoice);

}


rock.addEventListener("click", function(){
  return(userChoice = result_rock, game())
});

paper.addEventListener("click", function(){
  return(userChoice = result_paper, game());
});

scissors.addEventListener("click", function(){
  return(userChoice = result_scissors, game());
});

// Reset button to reload the page once the game is over
resetBtn.addEventListener('click',() => location.reload());

