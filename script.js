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

function playGame () {
    const options = ["rock", "paper", "scissors"];
    let humanScore = 0;
    let computerScore = 0;
    function getComputerChoice() {
            return options[Math.floor(Math.random() * 3)];
    }
    function disableChoiceButtons(){
        const buttons = choices.querySelectorAll("button");
        buttons.forEach(button => {button.disabled = true})
    };
    function enableChoiceButtons(){
        const buttons = choices.querySelectorAll("button");
        buttons.forEach(button => {button.disabled = false})
    };
    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        statusEl.textContent = "";
        winnerEl.textContent = "";
        resetBtn.hidden = true;
        enableChoiceButtons();
    }
    function endGame() {
        if (humanScore === 5) {
             winnerEl.textContent = `You won! ${humanScore} to ${computerScore}`;
             disableChoiceButtons();
             resetBtn.hidden = false;
         } if (computerScore === 5) {
             winnerEl.textContent = `Sorry, you lost. ${humanScore} to ${computerScore}`;
             disableChoiceButtons();
             resetBtn.hidden = false;
         }
    }

    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");
    const choices = document.querySelector("#choices");
    const statusEl = document.querySelector("#status");
    const winnerEl = document.querySelector("#winner");
    const resetBtn = document.querySelector("#reset");
    
    let winner = "";
    resetBtn.addEventListener('click', resetGame);
    
    choices.addEventListener('click', (event) => {
        if(!event.target.matches("button")) return;
        const humanChoice = event.target.id;
       
        const gameResult = playRound(humanChoice, getComputerChoice());
        
        statusEl.textContent = gameResult;

        if(humanScore === 5 || computerScore === 5) {endGame()};
        
    })

    function playRound(player, machine) {
         
            
        if (player === machine) {
            return `It's a tie! Try again. \n Your score: ${humanScore} \n Computer score: ${computerScore}`;
        } else if ((player == "scissors" && machine == "paper")
            || (player == "rock" && machine == "scissors")
            || (player == "paper" && machine == "rock")
        ) {
            humanScore += 1;
            return `You win! \n You: ${player} \n Computer: ${machine} \n Your score: ${humanScore} \n Computer score: ${computerScore}`;
        }
        else {
            computerScore += 1;
            return `You lost. \n You: ${player} \n Computer: ${machine} \nYour score: ${humanScore} \n Computer score ${computerScore}`;
        }
        
    
    }

}
playGame();