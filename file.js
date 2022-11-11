// Setting the game score to 0
let userScore = 0;
let computerScore = 0;

// Main game function

function game() {

  for (let i = 0; i < 5; i++) { /* Play the game 5 rounds */

    let values = ["rock", "paper", "scissors"]; /* The possibilities the computer can choose */
    let index = Math.floor(Math.random() * values.length); /* I use the random built in function to randomly pick a value from the array */

    function getComputerChoice() { /* Function for the computer choice */
      return values[index];
    }

    let computerChoice = getComputerChoice();
    let userChoice = (prompt("Please select rock, paper or scissor.")); /* Prompt so we can enter our choice */
    userChoice = userChoice.toLowerCase();

    function roundOfGame(userChoice, computerChoice) {
  
      if ((userChoice !== 'rock') && (userChoice !== 'paper') && (userChoice !== 'scissor')) {
        i-=1;
        return(`What's "${userChoice}"? Please enter a valid input.`); /* Return in case we have a TypeError */
      }
      else if (userChoice === computerChoice) {
        return("It is a tie");
      } else if ((userChoice === "rock" && computerChoice === "scissor") || (userChoice === "paper" && computerChoice == "rock") || (userChoice === "scissor" && computerChoice === "paper")) {
        userScore = userScore+=1;
        return(`Player wins! ${userChoice} beats ${computerChoice}. User score = ${userScore} and computer score = ${computerScore}`)
      } else {
        computerScore = computerScore+=1;
        return(`Computer wins! ${computerChoice} beats ${userChoice}. User score = ${userScore} and computer score = ${computerScore}`)
      }
    }

    console.log(roundOfGame(userChoice, computerChoice));
  }

}

game()