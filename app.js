const choices = ["rock", "paper", "scissors"];
let div = document.createElement("div");
let results = document.createElement("div");
let score = document.createElement("p");
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

document.body.appendChild(div);
document.body.appendChild(results);
results.appendChild(score);
setScore();

function setScore(){
    score.textContent = `Your score: ${humanScore} Computer score: ${computerScore}`
}



function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playGame(humanChoice, computerChoice){
    let p = document.createElement("p");

    function playRound(){
        let winMessage = `You win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}!`;
        let loseMessage = `You lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}!`;

        if ((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'rock')){
            ++humanScore;
            setScore();
            return winMessage;
        } else if ((computerChoice == 'rock' && humanChoice == 'scissors') || (computerChoice == 'scissors' && humanChoice == 'paper') || (computerChoice == 'paper' && humanChoice == 'rock')){
            ++computerScore;
            setScore();
            return loseMessage;
        } else {
            return `It's a tie! You both chose ${humanChoice}.`
        }
    }

    roundCounter++;
    p.textContent = `Round ${roundCounter}: ${playRound()}`;
    results.appendChild(p);

    if (roundCounter == 5){
        let message = document.createElement("p");
        if (humanScore > computerScore){
            message.textContent = 'You won the game!';
            results.appendChild(message);
        } else if (computerScore > humanScore){
            message.textContent = 'You lost the game!';
            results.appendChild(message);
        } else {
            message.textContent =  'It was a tie!';
            results.appendChild(message);
        }
        let buttons = document.querySelectorAll("button");
        buttons.forEach(btn => {
            btn.disabled = true;
        })
    }

}

choices.forEach(choice => {
    let btn = document.createElement("button");
    btn.id = choice;
    btn.textContent = choice;
    btn.addEventListener("click", () => {
        playGame(btn.id, getComputerChoice());
    })
    div.appendChild(btn);
})
