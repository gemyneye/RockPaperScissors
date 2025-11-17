//set variables for each object
//set score variables for user and computer to keep track
    //humanScore and computerScore each set to 0
const options = ["rock", "paper", "scissors"];
let round = 0;

//Challenge prompt for user to select Rock, paper, scissors (case insensitive)
    // User getHumanChoice function


//Randomly selected object
    //Computer random getComputerChoice function




//5 rounds of play (while loop) most wins win

//Function to play round playRound(humanChoice,computerChoice)
    //Compare objects and declare winner
    //Display for example (".. wins. {'Rock'} beats {'Scissors'}")
let humanScore = 0;
let computerScore = 0;

function getHumanChoice(){
        return prompt("Please choose 'rock', 'paper', or 'scissors'");
}

function getComputerChoice() {
        return options[Math.floor(Math.random() * 3)];
}
// getComputerChoice();
// getHumanChoice();

function playRound(player, machine) {
    if (player == machine) {
        return "tie";
    } else if (player == "scissors" && machine == "paper") {
        humanScore += 1;
        return `You won! Your score: ${humanScore} \n Computer score: ${computerScore}`
    }
    console.log(humanScore);
}
// console.log(getHumanChoice())
console.log(getComputerChoice());
console.log(getHumanChoice());

//Randomly selected object selected from array?

/* scissors beats paper
rock beats scissors
paper beats rock */

//Output result