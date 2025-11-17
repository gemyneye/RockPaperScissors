//set variables for each object
//set score variables for user and computer to keep track
    //humanScore and computerScore each set to 0


//Challenge prompt for user to select Rock, paper, scissors (case insensitive)
    // User getHumanChoice function


//Randomly selected object
    //Computer random getComputerChoice function

//5 rounds of play (while loop) most wins win

//Function to play round playRound(humanChoice,computerChoice)
    //Compare objects and declare winner
    //Display for example (".. wins. {'Rock'} beats {'Scissors'}")

    //Randomly selected object selected from array?

/* scissors beats paper
rock beats scissors
paper beats rock */

//Output result

const options = ["rock", "paper", "scissors"];
let round = 0;
let humanScore = 0;
let computerScore = 0;

function getHumanChoice(){
        return prompt("Please choose 'rock', 'paper', or 'scissors'").toLowerCase();
}

function getComputerChoice() {
        return options[Math.floor(Math.random() * 3)];
}


function playRound(player, machine) {
    
    if (player === machine) {
        return `It's a tie! Try again.`;
    } else if ((player == "scissors" && machine == "paper")
        || (player == "rock" && machine == "scissors")
        || (player == "paper" && machine == "rock")
    ) {
        humanScore += 1;
        return `You win! You: ${player} \n Computer: ${machine} \n Your score: ${humanScore} \n Computer score: ${computerScore}`;
    }
    else {
        computerScore += 1;
        return `You lost. You: ${player} \n Computer: ${machine} \nYour score: ${humanScore} \n Computer score ${computerScore}`;
    }
}
for (let i = 0; i < 5; i++) {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
}
let winner = '';
if (humanScore > computerScore) {
    winner = "you";
} else if (computerScore > humanScore) {
    winner ='The Computer!';
} else {
    winner = 'It\'s a tie! Want a rematch?';
}
 
console.log(`Five rounds complete! \n Final Score: \n You: ${humanScore}, \n Computer: ${computerScore}. And the winner is ... ${winner}`);

