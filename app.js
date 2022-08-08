const resultsDisplay = document.querySelector('.title');
const displayPlayerPick = document.querySelector('.playerPick');
const displayCompPick = document.querySelector('.compPick');

let current = true;


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        resultsDisplay.innerHTML = 'TIE';
    }
    else if(playerSelection === 'ROCK' && computerSelection === 'PAPER'){
        resultsDisplay.innerHTML = 'YOU LOSE';
    }
    else if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        resultsDisplay.innerHTML = 'YOU WIN';
    }
    else if(playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
        resultsDisplay.innerHTML = 'YOU WIN'
    }
    else if(playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
        resultsDisplay.innerHTML = 'YOU LOSE'
    }
    else if(playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        resultsDisplay.innerHTML = 'YOU WIN'
    }
    else if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
        resultsDisplay.innerHTML = 'YOU LOSE'
    }

}

const rock = document.getElementById('rockBtn');
const paper = document.getElementById('paperBtn');
const scissors = document.getElementById('scissorsBtn');

rock.addEventListener('click', ()=>handleClick('ROCK'));
paper.addEventListener('click', ()=>handleClick('PAPER'));
scissors.addEventListener('click', ()=>handleClick('SCISSORS'));

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
    if(current === true){
        playerSelection = selection;
        displayPlayerPick.innerHTML = selection;
        current = false;
        computerSelection = compChoice();
    }
    playRound(playerSelection, computerSelection);
}
