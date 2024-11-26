
function getComputerChoice() {
    let randChoice = Math.floor(Math.random() * 3) + 1;
    if (randChoice === 1) {
        return "rock";
    }
    else if (randChoice === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let input;
    while (input !== "rock" && input !== "paper" && input !== "scissors") {
        input = prompt("What do you choose to throw out?");
    }
    return input;
    
}

function playRound(humanChoice, computerChoice) {
    
}

let humanScore = 0;
let computerScore = 0;

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

console.log(x);
console.log(y);