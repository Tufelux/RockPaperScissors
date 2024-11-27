
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
    let input = null;
    while (input !== "rock" && input !== "paper" && input !== "scissors") {
        input = prompt("What do you choose to throw out?");
        if (input === null) {
            console.log("Game canceled by the user.");
            return null;
        }
    }
    return input;
}

function playGame() {

    let result;

    let humanScore = 0;
    let computerScore = 0;
    
    while (humanScore !== 5 && computerScore !== 5) {
        
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if (humanChoice === computerChoice) {
            console.log("Aww it's a draw!");
        }
        else {
            switch (humanChoice) {
                case "rock":
                    result = (computerChoice === "scissors") ? ("You win!") : ("You lose!");
                    break;
                case "paper":
                    result = (computerChoice === "rock") ? ("You win!") : ("You lose!");
                    break;
                case "scissors":
                    result = (computerChoice === "paper") ? ("You win!") : ("You lose!");
                    break;
            }
            console.log(result);
            if (result === "You win!") {
                humanScore++;
            } else {
                computerScore++;
            }
        }
    }
    console.log(humanScore === 5 ? "You won!" : "The computer won ):");
}

playGame();