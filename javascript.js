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


const container = document.querySelector('#container');

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        div.textContent = playRound(button.id, getComputerChoice());
    });
});

// creates a new div referenced in the variable 'div'
const div = document.createElement('div');
div.classList.add('content');
let computerScore = 0;
let playerScore = 0;

container.appendChild(div);

