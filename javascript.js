function getComputerChoice() {
    let computerChoice = getRandomIntInclusive(1,3);
    if (computerChoice === 1) {
        return "ROCK";
    }
    else if (computerChoice === 2) {
        return "PAPER";
    }
    else if (computerChoice === 3) {
        return "SCISSORS";
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK" && computerSelection === "ROCK") {
        return "It is a Draw! Both of you chose Rock";
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
        return "It is a Draw! Both of you chose Paper";
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        return "It is a Draw! Both of you chose Scissors";
    }
    else return "Your choice is not valid";
  }

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerInput = (prompt("Please enter your choice between Rock Paper Sciccors")).toString();
        let playerChoice = playerInput.toUpperCase();
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerChoice, computerSelection);
        console.log(roundResult);
        if (roundResult === "You Win! Rock beats Scissors" || 
            roundResult === "You Win! Paper beats Rock" || 
            roundResult === "You Win! Scissors beats Paper") {
            playerScore++;
        }
        else if (roundResult === "You Lose! Paper beats Rock" || 
                 roundResult === "You Lose! Scissors beats Paper" || 
                 roundResult === "You Lose! Rock beats Scissors" || 
                 roundResult === "Your choice is not valid") {
                 computerScore++;
        }
        console.log(playerScore,computerScore);
        console.log(playerChoice,computerSelection);
     }
     if (playerScore > computerScore) {
        return "You Win!";
     }
     else if (computerScore > playerScore) {
        return "You Lose!";
     }
     else if (playerScore === computerScore) {
        return "It is a Draw!";
     }
}
  
console.log(game());


