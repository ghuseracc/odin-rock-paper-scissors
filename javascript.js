function getComputerChoice() {
    let choice = getRandomIntInclusive(1,3);
    console.log(choice)
    if (choice === 1) {
        return "ROCK"
    }
    else if (choice === 2) {
        return "PAPER"
    }
    else if (choice === 3) {
        return "SCISSORS"
    }
}

console.log(getComputerChoice())

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  