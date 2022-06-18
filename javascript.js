let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock-selector");
const paperButton = document.querySelector("#paper-selector");
const scissorsButton = document.querySelector("#scissors-selector");

rockButton.addEventListener("click", () => {playRound("rock",computerChoice)});
paperButton.addEventListener("click", () => {playRound("rock",computerChoice)});
scissorsButton.addEventListener("click", () => {playRound("rock",computerChoice)});

let computerChoice = () => {
    return ("test");
};

function playRound(pChoice,cChoice){
    alert(pChoice)
    alert(cChoice)
}

