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
        return choiceRegex.test(getUserInput.toLowerCase())
    } else {
        getHumanChoice();
    }

}

console.log(getHumanChoice())
