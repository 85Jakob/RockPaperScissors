const resultsDisplay = document.querySelector('.title');
const displayPlayerPick = document.querySelector('.playerPick');
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

function handleClick(selection){
    if(current === true){
        playerSelection = selection;
        displayPlayerPick.innerHTML = selection
        current = false;
    }

}
