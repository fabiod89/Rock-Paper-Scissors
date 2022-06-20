const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

let playerHealth = document.getElementById("player-health");
let enemyHealth = document.getElementById("enemy-health");
playerHealth.innerHTML = 5;
enemyHealth.innerHTML = 5;

let buttonsDisabled = false;

function randomChoices() {
    const choices = [".enemy-rock-button",".enemy-paper-button",".enemy-scissors-button"];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return (choice)
}

function calculateRound(playerChoice,computerChoice){
    playerChoice = document.querySelector(playerChoice).name
    computerChoice = document.querySelector(computerChoice).name

    if (playerChoice === computerChoice){
        alert("Tie")
    }

}


function buttonAnimation(playerChoice,computerChoice){
    document.querySelector(playerChoice).querySelector("img").style.borderColor = "green";
    document.querySelector(computerChoice).querySelector("img").style.borderColor = "red";
}

rockButton.addEventListener("click", () => {playRound(".rock-button")});
paperButton.addEventListener("click", () => {playRound(".paper-button")});
scissorsButton.addEventListener("click", () => {playRound(".scissors-button")});

function playRound(playerChoice){
    buttonsDisabled = true;
    if (buttonsDisabled){
        let computerChoice = randomChoices()
        buttonAnimation(playerChoice,computerChoice)
        calculateRound(playerChoice,computerChoice);
            
    
    
        buttonsDisabled = false;
    /* 
    

    checkWinner();
    resetButtons(pChoice,cChoice)
    buttonsDisabled = false;

    */
    }
}