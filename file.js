let userScore = 0;
let computerScore = 0;

function game() {

  for (let i = 0; i < 5; i++) {

    let values = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * values.length);

    function getComputerChoice() {
      return values[index];
    }

    let computerChoice = getComputerChoice();
    let userChoice = (prompt("Please select rock, paper or scissors."));
    userChoice = userChoice.toLowerCase();

    function roundOfGame(userChoice, computerChoice) {
  
      if ((userChoice !== 'rock') && (userChoice !== 'paper') && (userChoice !== 'scissor')) {
        i-=1;
        return(`What's "${userChoice}"? Please enter a valid input.`);
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