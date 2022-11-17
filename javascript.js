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
}

let computerScore = 0;
let playerScore = 0;

const container = document.querySelector('#container');

// creates a new div referenced in the variable 'div'
const div = document.createElement('div');
div.classList.add('content');
container.appendChild(div);
    
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        let playerChoice = button.id;
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerChoice, computerSelection);
        if (roundResult === "You Win! Rock beats Scissors" || 
            roundResult === "You Win! Paper beats Rock" || 
            roundResult === "You Win! Scissors beats Paper") {
            playerScore++;
        }
        else if (roundResult === "You Lose! Paper beats Rock" || 
                 roundResult === "You Lose! Scissors beats Paper" || 
                 roundResult === "You Lose! Rock beats Scissors") {
                 computerScore++;
        }
        div.textContent = roundResult + "\nPlayer " + playerScore + "\nComputer " + computerScore;
        if (playerScore === 5) {
            div.textContent = "You Win!" + "\nPlayer " + playerScore + "\nComputer " + computerScore;
            playerScore = 0;
            computerScore = 0;
            }
            else if (computerScore === 5 ) {
            div.textContent = "You Lose!" + "\nPlayer " + playerScore + "\nComputer " + computerScore;
            playerScore = 0;
            computerScore = 0;
            }
    });
});



