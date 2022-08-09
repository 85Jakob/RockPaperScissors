const resultsDisplay = document.querySelector('.title');
const displayPlayerPick = document.querySelector('.playerPick');
const displayCompPick = document.querySelector('.compPick');
const rock = document.getElementById('rockBtn');
const paper = document.getElementById('paperBtn');
const scissors = document.getElementById('scissorsBtn');
const resetBtn = document.getElementById('resetBtn');
const cScore = document.querySelector('.cScore');
const pScore = document.querySelector('.pScore');
const buttonBox = document.querySelector('.buttons')
const resetBox = document.querySelector('.reset')

const maxScore = 5;
let playerScore = 0;
let computerScore = 0;
resetBox.style.display = 'none';

rock.addEventListener('click', ()=>handleClick('ROCK'));
paper.addEventListener('click', ()=>handleClick('PAPER'));
scissors.addEventListener('click', ()=>handleClick('SCISSORS'));
resetBtn.addEventListener('click', ()=>reset());


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        resultsDisplay.innerHTML = 'TIE';
    }
    else if(playerSelection === 'ROCK' && computerSelection === 'PAPER'){
        resultsDisplay.innerHTML = 'YOU LOSE';
        computerScore++;
    }
    else if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        resultsDisplay.innerHTML = 'YOU WIN';
        playerScore++;
    }
    else if(playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
        resultsDisplay.innerHTML = 'YOU WIN'
        playerScore++;
    }
    else if(playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
        resultsDisplay.innerHTML = 'YOU LOSE'
        computerScore++;
    }
    else if(playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        resultsDisplay.innerHTML = 'YOU WIN'
        playerScore++;
    }
    else if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
        resultsDisplay.innerHTML = 'YOU LOSE'
        computerScore++;
    }
    pScore.innerHTML = playerScore;
    cScore.innerHTML = computerScore;

    if (playerScore === 5){
        resultsDisplay.innerHTML = 'CONGRATS YOU BEAT THE MACHINE, YOU WIN!!';
        buttonBox.style.display = 'none';
        resetBox.style.display = 'flex';
    }
    else if(computerScore === 5){
        resultsDisplay.innerHTML = 'YOU LOSE, THE MACHINE HAS WON!! :(';
        buttonBox.style.display = 'none';
        resetBox.style.display = 'flex';
    }

}

function getRandomChoice() {
    return Math.floor(Math.random() * 3);
}

function compChoice(){
    let computerSelection;
    let choice = getRandomChoice();
    if(choice === 0){
        computerSelection = "ROCK";
    }
    else if(choice === 1){
        computerSelection = "PAPER";
    }
    else{
        computerSelection = "SCISSORS";
    }
    displayCompPick.innerHTML = computerSelection;
    return computerSelection;
}

function handleClick(selection){
    let playerSelection;
    let computerSelection;

    if(playerScore < maxScore && computerScore < maxScore){
        playerSelection = selection;
        displayPlayerPick.innerHTML = selection;
        current = false;
        computerSelection = compChoice();
        
        playRound(playerSelection, computerSelection);
    }
}

function reset(){
    buttonBox.style.display = 'flex';
    resultsDisplay.innerHTML = 'ROCK PAPAR SCISSORS'
    playerScore = 0;
    computerScore = 0;  
    pScore.innerHTML = playerScore;
    cScore.innerHTML = computerScore;
    resetBox.style.display = 'none';


}