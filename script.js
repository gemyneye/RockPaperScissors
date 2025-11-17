//Challenge prompt for user to select Rock, paper, scissors (case insensitive)
    // User getHumanChoice function
//set variables for each object

const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let round = 0;
function getHumanChoice(){
    let humanChoice = window.prompt("Please choose 'rock', 'paper', or 'scissors'");
    console.log(humanChoice);
}

//Randomly selected object
    //Computer random getComputerChoice function
function getComputerChoice() {
    let randomChoice = options[Math.floor(Math.random() * 3)];
    console.log(randomChoice);
}
getComputerChoice();
getHumanChoice();
//set score variables for user and computer to keep track
    //humanScore and computerScore each set to 0
//5 rounds of play (while loop) most wins win

//Function to play round playRound(humanChoice,computerChoice)
    //Compare objects and declare winner
    //Display for example (".. wins. {'Rock'} beats {'Scissors'}")


//Randomly selected object selected from array?

/* scissors beats paper
rock beats scissors
paper beats rock */

//Output result