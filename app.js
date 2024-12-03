function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) return 'rock';
    if (randomNumber == 1) return 'paper';
    if (randomNumber == 2) return 'scissors';
}

function getHumanChoice(){
    let getUserInput = prompt('Please enter "rock", "paper", or "scissors".');
    let choiceRegex = /rock|paper|scissors/;

    if (choiceRegex.test(getUserInput.toLowerCase())){
        return getUserInput.toLowerCase();
    } else {
        getHumanChoice();
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let roundCounter = 0;

    function playRound(humanChoice, computerChoice){
        let winMessage = `You win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}!`;
        let loseMessage = `You lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}!`;

        if ((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'rock')){
            ++humanScore;
            return winMessage + `\nYour score: ${humanScore} Computer score: ${computerScore}`;
        } else if ((computerChoice == 'rock' && humanChoice == 'scissors') || (computerChoice == 'scissors' && humanChoice == 'paper') || (computerChoice == 'paper' && humanChoice == 'rock')){
            ++computerScore;
            return loseMessage + `\nYour score: ${humanScore} Computer score: ${computerScore}`;
        } else {
            return `It's a tie! You both chose ${humanChoice}.`
        }
    }

    while (roundCounter < 5){
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        roundCounter++;
    }

    if (humanScore > computerScore){
        return 'You won the game!'
    } else if (computerScore > humanScore){
        return 'You lost the game!'
    } else {
        return 'It was a tie!'
    }
}

console.log(playGame())
