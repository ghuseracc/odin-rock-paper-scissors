function getComputerChoice() {
    let choice = getRandomIntInclusive(1,3);
    console.log(choice)
    if (choice === 1) {
        return "ROCK";
    }
    else if (choice === 2) {
        return "PAPER";
    }
    else if (choice === 3) {
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
  }
   
  const playerSelection = "ROCK";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));