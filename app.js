const resultsDisplay = document.querySelector('.title');
const displayPlayerPick = document.querySelector('.playerPick');
const displayCompPick = document.querySelector('.compPick');
let playerSelection;

let current = true;


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        resultsDisplay.innerHTML = 'TIE';
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
}

function handleClick(selection){
    if(current === true){
        playerSelection = selection;
        displayPlayerPick.innerHTML = selection;
        current = false;
        compChoice();
    }
}
