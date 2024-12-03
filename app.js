let humanScore = 0;
let computerScore = 0;

//MAKE a function called 'getComputerChoice'
    //CREATE a variable called 'randomNumber'
    //GENERATE a random number from Math.random and multiply it to 3
    //USE Math.floor to make the result into an integer
    //ASSIGN the result to 'randomNumber'
    //IF 'randomNumber' is 0, RETURN the string 'rock'
    //ELSE IF 'randomNumber' is 1, RETURN the string 'paper'
    //ELSE IF 'randomNumber is 2, RETURN the string 'scissors'

//CALL the function thrice in the console.log to check if it randomizes and returns a string

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) return 'rock';
    if (randomNumber == 1) return 'paper';
    if (randomNumber == 2) return 'scissors';
}

//CREATE a function called 'getHumanChoice'
    //INITIALIZE a variable called 'getUserInput' with a prompt method, and a message asking to choose among rock, paper or scissors
    //TRANSFORM the user input into lowercase
    //CHECK the user input if it matches 'rock', 'paper' or 'scissors'
    //WARN the user if it is not a valid input
    //IF it is a match, RETURN the string

//CALL the function within console.log

function getHumanChoice(){
    let getUserInput = prompt('Please enter "rock", "paper", or "scissors".');
    let choiceRegex = /rock|paper|scissors/;

    if (choiceRegex.test(getUserInput.toLowerCase())){
        return getUserInput.toLowerCase();
    } else {
        getHumanChoice();
    }
}

//MAKE a function called 'playRound'
    //DEFINE the parameters as 'humanChoice' and 'computerChoice'
    //WRITE a message for the player win
        //WINNING CONDITIONS:
        //IF player has Rock, it beats Scissors
        //IF player has Scissors, it beats Paper
        //IF player has Paper, it beats Rock
        //INCREMENT the player score each time
    //WRITE a message for the player loss
        //Losing conditions are the same as winning conditions but reversed roles
        //INCREMENT the computer score each time
    //IF there is no winner, PRINT a message for a tie

function playRound(humanChoice, computerChoice){
    let winMessage = `You win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}!`;
    let loseMessage = `You lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}!`;

    if ((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'rock')){
        computerScore++;
        return winMessage;
    } else if ((computerChoice == 'rock' && humanChoice == 'scissors') || (computerChoice == 'scissors' && humanChoice == 'paper') || (computerChoice == 'paper' && humanChoice == 'rock')){
        computerScore++;
        return loseMessage;
    } else {
        return `It's a tie! You both chose ${humanChoice}.`
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()))
