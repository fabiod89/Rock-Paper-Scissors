const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

let playerHealth = document.getElementById("player-health");
let computerHealth = document.getElementById("enemy-health");
playerHealth.innerHTML = 5;
computerHealth.innerHTML = 5;

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
        console.log("Tie")}
    else if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "rock"){
            playerHealth.innerHTML -= 1}
    else if (computerChoice === "rock" && playerChoice === "scissors" ||
        computerChoice === "scissors" && playerChoice === "paper" ||
        computerChoice === "paper" && playerChoice === "rock"){
            computerHealth.innerHTML -= 1}
        

}

function resetButtons(playerChoice,computerChoice){
    document.querySelector(playerChoice).querySelector("img").style.borderColor = "white";
    document.querySelector(computerChoice).querySelector("img").style.borderColor = "white";

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
        resetButtons(playerChoice,computerChoice)
    
        buttonsDisabled = false;
    /* 
    


    resetButtons(pChoice,cChoice)
    checkWinner();
    buttonsDisabled = false;

    */
    }
}