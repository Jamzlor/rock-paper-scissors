let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;

function getComputerChoice (){
    let computerChoice = Math.floor(Math.random() * 3);
  if(computerChoice === 0){
    computerSelection = 'rock';
  } else if (computerChoice === 1){
    computerSelection = 'paper';
  } else if (computerChoice === 2){
    computerSelection = 'scissor';
  }
};



function getPlayerChoice() {
    playerSelection = prompt('Player chooses? rock / paper / scissor').toLowerCase()
};

function playRound(playerChoice, computerChoice){
    
    if(playerChoice === computerChoice){
        return 'Tied'
    } if(playerChoice === 'rock'){
        if(computerChoice === 'paper'){
            computerWins++;
            return 'You lose!'
        } else {
            playerWins++;
            return 'You win!'
        }
    } if(playerChoice === 'paper'){
        if(computerChoice === 'scissor'){
            computerWins++;
            return 'You lose!'
        } else {
            playerWins++;
            return 'You win!'
        }
    } if(playerChoice === 'scissor'){
        if(computerChoice === 'rock'){
            computerWins++;
            return 'You lose!'
        } else {
            playerWins++;
            return 'You win!'
        }
    }
}
function game(){
    getComputerChoice();
    getPlayerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log('Player Win: ' + playerWins);
    console.log('Computer Win: ' + computerWins);
}

game();
game();
game();
game();
game();
    







