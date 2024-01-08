//Global Variables
let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;
let ties = 0;
let winner;

//DOM query selector variables
const body = document.querySelector('body');
const playerButton = document.querySelectorAll('.playerChoiceButton');
const scoreCards = document.querySelectorAll('.scoreCard');
const huamnScore = document.querySelector('#humanScore');
const tiedScore = document.querySelector('#tiedScore');
const computerScore = document.querySelector('#computerScore');
const resetButton = document.createElement('button');

//DOM manipulations
resetButton.setAttribute('id', 'resetButton');
//Logics

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


function roundLogic(playerChoice, computerChoice){
    
    if(playerChoice === computerChoice){
        ties++;
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

function playOneRound(buttonChoice){
    getComputerChoice();
    playerSelection = buttonChoice.toLowerCase();
    console.log(roundLogic(playerSelection, computerSelection));
    console.log(ties, playerWins, computerWins)
    tiedScore.innerText = ties;
    humanScore.innerText = playerWins;
    computerScore.innerText = computerWins;
}

function checkWins(){
    if(playerWins === 5 || computerWins === 5){
        playerButton.forEach((button) => button.setAttribute('disabled', true));
        (playerWins === 5) ? winner = 'Player Wins!' : winner = 'Computer Wins!';
        resetButton.innerText = winner + '\
        Reset Game';
        body.appendChild(resetButton)
    };
}


console.log(playerButton)

//Event Listners
playerButton.forEach((button) => button.addEventListener('click', (e) => {
    playOneRound(e.target.innerText)
    checkWins();
}));

resetButton.addEventListener('click', () => {
    playerWins = 0;
    computerWins = 0;
    ties = 0;
    tiedScore.innerText = ties;
    humanScore.innerText = playerWins;
    computerScore.innerText = computerWins;
    playerButton.forEach((button) => button.removeAttribute('disabled'));
    body.removeChild(resetButton);
});





