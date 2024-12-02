# Rock, Paper, Scissors Project for The Odin Project
## Step 1: Setup the project structure
1. Create a new Git repository.
2. Create an external JS file. Link the file to the script tag in the blank HTML file.
3. Check if the JS file is connected correctly:
    - Write `console.log('Hello World')` in JavaScript
    - Check if 'Hello World' is logged in the console when you load the file.

## Step 2: Write the logic to get the computer choice
Your game will be played against the computer. You will write a function that randomly returns "rock", "paper" or "scissors".
1. Create a new function named `getComputerChoice`.
2. Write the code so that `getComputerChoice` will randomly return one of the following string values: "rock", "paper", or "scissors".
    - **Hint:** Use `Math.random` method and multiply it to 3 (the max number of choices). Remember to use `Math.floor` to create a whole number.
    - **Note:** Some might want to use arrays for this lesson, but a simple if/else statement will do. (If you want it to be smoother, we could also use a switch statement.)
3. Test that your function returns what you expect using `console.log` or the browser developer tools before advancing to the next step.

## Step 3: Write the logic to get the human choice
Your game will be played by a human player. You will write a function that takes the user choice and returns it.
1. Create a new function named `getHumanChoice`.
2. Write the code so that `getHumanChoice` will return one of the valid choices depending on what the user inputs.
    - **Hint:** Use the `prompt` method to get the user's input. You can write a message inside the parenthesis to prompt the user.
3. Test what your function returns by using `console.log`.

## Step 4: Declare the players score variables
Your game will keep track of the players score. You will write variables to keep track of the players score.
1. Create two new variables named `humanScore` and `computerScore` in the global scope.
2. Initialize the variables with the value of `0`.

## Step 5: Write the logic to play a single round
Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner's score and logs a winner announcement.
1. Create a new function named `playRound`.
2. Define two parameters for `playRound`: `humanChoice` and `computerChoice`. Use these two parameters to take the human and computer choices as arguments.
3. Make your function's `humanChoice` parameter case-insensitive so that the players can input "rock", "ROCK", "RocK, or other variations.
4. Write the code for your `playRound` function to console.log a string value representing the round winnder, such as: "You lose! Paper beats Rock".
5. Increment the `humanScore` or `computerScore` variable based on the round winner.

## Step 6: Write the logic to play the entire game
Your game will play 5 rounds. You will write a function named `playGame` that calls `playRound` to play 5 rounds, keeps track of the scores and declares a winner at the end.
1. Create a new function named `playGame`.
2. Move your `playRound` function and score variables so that they're declared inside of the new `playGame` function
3. Play 5 rounds by calling `playRound` 5 times.
    - **Hint:** If you assign a function to a variable, it will yield the same results each time. You need to recall the functions get a new choice each round.
    - Rework previous functions or create more helper functions if necessary. You may want to change return values to something more useful.
    - If you already know loops, you can use them!
