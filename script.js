let computerSelection;
let playerSelection;
let scorePlayer = 0;
let scoreComputer = 0;

const computerChoices = ['Rock', 'Paper', 'Scissors'];
function computerPlay() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toUpperCase();
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == 'SCISSORS' && computerSelection === 'ROCK' ||
        playerSelection == 'ROCK' && computerSelection === 'PAPER' ||
        playerSelection == 'PAPER' && computerSelection === 'SCISSORS') {
            scoreComputer++;
            displayResults(`You lose! ${computerSelection} beats ${playerSelection}. 
            You ${scorePlayer} - ${scoreComputer} Computer`);
    } else if 
        (playerSelection == 'SCISSORS' && computerSelection === 'PAPER' ||
         playerSelection == 'ROCK' && computerSelection === 'SCISSORS' ||
         playerSelection == 'PAPER' && computerSelection === 'ROCK') {
            scorePlayer++;
            displayResults(`You win! ${playerSelection} beats ${computerSelection}. 
            You ${scorePlayer} - ${scoreComputer} Computer`);
    } else {
        displayResults(`No winner. You ${scorePlayer} - ${scoreComputer} Computer`);
    }
};

function displayResults(strResult) {
    const result = document.querySelector('.results');
    result.textContent = strResult;
};

function displayFinalResults(strFinResult) {
    const finalResult = document.querySelector('.finalResults');
    finalResult.textContent = strFinResult;
}

function isWinner () {
    if (scorePlayer > scoreComputer) {
        displayFinalResults(`You won the game! You ${scorePlayer} - ${scoreComputer} Computer`);
    } else if (scoreComputer < scorePlayer) {
        displayFinalResults(`You lose the game... You ${scorePlayer} - ${scoreComputer} Computer`);
    } else {
        displayFinalResults(`Equality. You ${scorePlayer} - ${scoreComputer} Computer`);
    }
};

const btns = document.querySelectorAll("button");
btns.forEach(button => button.addEventListener('click', () => {
    playerSelection = button.innerText.toLowerCase(); 
    playRound(playerSelection, computerSelection);
    if (scorePlayer === 5 || scoreComputer === 5) {
        isWinner();
        scoreComputer = 0;
        scorePlayer = 0;
    }
  })
);