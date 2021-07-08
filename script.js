let computerSelection;
let playerSelection;
let scorePlayer = 0;
let scoreComputer = 0;

// computer choice
const computerChoices = ['Rock', 'Paper', 'Scissors'];
function computerPlay() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

// calculate who is the winner of the round and add score
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toUpperCase();
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == 'SCISSORS' && computerSelection === 'ROCK' ||
        playerSelection == 'ROCK' && computerSelection === 'PAPER' ||
        playerSelection == 'PAPER' && computerSelection === 'SCISSORS') {
            scoreComputer++;
            return displayResults(`You lose! ${computerSelection} beats ${playerSelection}. 
            You ${scorePlayer} - Computer ${scoreComputer}`);
    } else if 
        (playerSelection == 'SCISSORS' && computerSelection === 'PAPER' ||
         playerSelection == 'ROCK' && computerSelection === 'SCISSORS' ||
         playerSelection == 'PAPER' && computerSelection === 'ROCK') {
            scorePlayer++;
            return displayResults(`You win! ${playerSelection} beats ${computerSelection}. 
            You ${scorePlayer} - Computer ${scoreComputer}`);
    } else {
        return displayResults(`No winner. You ${scorePlayer} - Computer ${scoreComputer}`);
    }
};

const btns = document.querySelectorAll("button");
btns.forEach(button => button.addEventListener('click', () => {
    playerSelection = button.innerText.toLowerCase(); 
    console.log(playRound(playerSelection, computerSelection));
  })
);


function displayResults(strResult) {
    const result = document.querySelector('.results')
    result.textContent = strResult;
};


// declare who is the winner of the game 
/*
function isWinner () {
    if (scorePlayer > scoreComputer) {
        return console.log(`Result: You won the game! You ${scorePlayer} - Computer ${scoreComputer}`);
    } else if (scorePlayer < scoreComputer) {
        return console.log(`Result: You lose the game... You ${scorePlayer} - Computer ${scoreComputer}`);
    } else {
        return console.log(`Result: Equality. You ${scorePlayer} - Computer ${scoreComputer}`);
    }
};
*/

/*

// start the five rounds game
function game() {
    console.log('Round 1');
    console.log(playRound());
    console.log('Round 2');
    console.log(playRound());
    console.log('Round 3');
    console.log(playRound());
    console.log('Round 4');
    console.log(playRound());
    console.log('Round 5');
    console.log(playRound());
    isWinner();
    return 'End of the game.';
}

*/
