// computer choice
function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'Rock';
    } else if (random === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
};

let scorePlayer = 0;
let scoreComputer = 0;

// declare who is the winner of the game 
function isWinner () {
    if (scorePlayer > scoreComputer) {
        return console.log(`Result: You won the game! You ${scorePlayer} - Computer ${scoreComputer}`);
    } else if (scorePlayer < scoreComputer) {
        return console.log(`Result: You lose the game... You ${scorePlayer} - Computer ${scoreComputer}`);
    } else {
        return console.log(`Result: Equality. You ${scorePlayer} - Computer ${scoreComputer}`);
    }
};

// calculate who is the winner of the round and add score
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock paper scissors ?!").toLowerCase();
    computerSelection = computerPlay();
    if (playerSelection == 'scissors' && computerSelection === 'Rock') {
        scoreComputer++;
        return `You lose! Rock beats Scissors. 
        You ${scorePlayer} - Computer ${scoreComputer}`;
    } else if (playerSelection == 'scissors' && computerSelection === 'Paper') {
        scorePlayer++;
        return `You win! Scissors beats Paper. You ${scorePlayer} - Computer ${scoreComputer}`;
    } else if (playerSelection == 'rock' && computerSelection === 'Paper') {
        scoreComputer++;
        return `You lose! Paper beats Rock. You ${scorePlayer} - Computer ${scoreComputer}`;
    } else if (playerSelection == 'rock' && computerSelection === 'Scissors') {
        scorePlayer++;
        return `You win! Rock beats Scissors. You ${scorePlayer} - Computer ${scoreComputer}`;
    } else if (playerSelection == 'paper' && computerSelection === 'Rock') {
        scorePlayer++;
        return `You win! Paper beats Rock. You ${scorePlayer} - Computer ${scoreComputer}`;
    } else if (playerSelection == 'paper' && computerSelection === 'Scissors') {
        scoreComputer++;
        return `You lose! Scissors beats Paper. You ${scorePlayer} - Computer ${scoreComputer}`;
    } else {
        return `No winner. You ${scorePlayer} - Computer ${scoreComputer}`;
    }
}


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
