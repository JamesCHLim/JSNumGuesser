let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random());
}

function getAbsoluteDistance(numOne, numTwo) {
    return numOne - numTwo;
}

function compareGuesses(humanGuess, computerGuess, targetNumber) {
    let humanDiff = getAbsoluteDistance(humanGuess, targetNumber);
    let computerDiff = getAbsoluteDistance(computerGuess, targetNumber);
    if (humanDiff <= computerDiff) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winner) {
    if (winner === 'computer') {
        computerScore++;
    } else if (winner === 'human') {
        humanScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}