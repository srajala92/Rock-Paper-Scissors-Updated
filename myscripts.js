const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const scoreDisplay = document.getElementById('score')
let userChoice
let computerChoice
let result
let round = 0
let playerScore = 0
let computerScore = 0
let winner
let score

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    generateComputerChoice ()
    getResult()
    updateDisplay()
    checkWinner()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber ===3) {
        computerChoice = 'paper'
    }
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a tie!"
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "You won! Paper beats rock.";
        playerScore++;
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "You lost! Rock beats scissors.";
        computerScore++;
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "You win! Scissors beat paper.";
        playerScore++;
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "You lose! Paper beats rock.";
        computerScore++;
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "You win! Rock beats scissors."
        playerScore++;
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "You lose! Scissors beat paper.";
        computerScore++;
    }
    round++;
}

/* function playGame () {
   getResult();
   score = `Round ${round} complete. YOU: ${playerScore}, COMPUTER: ${computerScore}`;
    scoreDisplay.textContent = score
}

for (let round = 0; round < 5; round++) {
    playGame ();
}
 */

function updateDisplay() {
    computerChoiceDisplay.textContent = computerChoice;
    resultDisplay.textContent = result;
    scoreDisplay.textContent = `Round ${round} complete. YOU: ${playerScore}, COMPUTER: ${computerScore}`;
    userChoiceDisplay.textContent = userChoice;
}

function checkWinner() {
    if (playerScore >= 5 ) {
        alert (`You win! YOU: ${playerScore}, COMPUTER: ${computerScore}`)
        resetGame()
    }
    else if (computerScore >= 5 ) {
        alert (`You lose! YOU: ${playerScore}, COMPUTER: ${computerScore}`)
        resetGame()
    }
}

function resetGame() {
    computerChoice = ''
    userChoice = ''
    result = ''
    score = ''
    round = 0
    playerScore = 0
    computerScore = 0
    updateDisplay()
}

/* 
if (playerScore > computerScore) {
    winner = `You are the champion! You defeated the computer ${playerScore} to ${computerScore}.`
}
if (playerScore == computerScore) {
    winner = `It is a tie! ${playerScore} to ${computerScore}.`
}
if (playerScore < computerScore) {
    winner = `The computer has defeated you ${computerScore} to ${playerScore}! Better luck next time!`
}
winnerDisplay.textContent = winner */