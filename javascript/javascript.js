const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

let playerHealth = document.getElementById("player-health");
let computerHealth = document.getElementById("enemy-health");
playerHealth.innerHTML = 5;
computerHealth.innerHTML = 5;

let message = document.querySelector(".message");
message.innerHTML = "Please choose an option..."

let buttonsDisabled = false;
let game = true

function randomChoices() {
    const choices = [".enemy-rock-button",".enemy-paper-button",".enemy-scissors-button"];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return (choice)
}

function calculateRound(playerChoice,computerChoice){
    playerChoice = document.querySelector(playerChoice).name
    computerChoice = document.querySelector(computerChoice).name
    if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "rock"){
            message.innerHTML = "Round won..."

            setTimeout( () => { computerHealth.innerHTML -= 1 },2000)
        }
    else if (computerChoice === "rock" && playerChoice === "scissors" ||
        computerChoice === "scissors" && playerChoice === "paper" ||
        computerChoice === "paper" && playerChoice === "rock"){
            message.innerHTML = "Round lost..."

            setTimeout( () => { playerHealth.innerHTML -= 1 },2000)
        }
    else{
        message.innerHTML = "Tie!"
    }
}

function checkWinner(){
    if (playerHealth.innerHTML < 1){
        game = false;
        message.innerHTML = "You lose... Refresh to play again!"
    }else if (computerHealth.innerHTML < 1){
        game = false;
        message.innerHTML = "You win... Refresh to play again!"
    }
}

function resetButtons(playerChoice,computerChoice){
    document.querySelector(playerChoice).querySelector("img").style.borderColor = "white";
    document.querySelector(computerChoice).querySelector("img").style.borderColor = "white";

}

function buttonAnimation(playerChoice,computerChoice){
    document.querySelector(playerChoice).querySelector("img").style.borderColor = "green";
    document.querySelector(computerChoice).querySelector("img").style.borderColor = "red";
}





function playRound(playerChoice){
    buttonsDisabled = true;
    if (buttonsDisabled && game){
        let computerChoice = randomChoices()
        buttonAnimation(playerChoice,computerChoice)
        calculateRound(playerChoice,computerChoice);
        
        setTimeout( () => { resetButtons(playerChoice,computerChoice);buttonsDisabled = false;checkWinner() },2000)
      
    }
}

rockButton.addEventListener("click", () => {if (buttonsDisabled === false){playRound(".rock-button")}});
paperButton.addEventListener("click", () => {if (buttonsDisabled === false){playRound(".paper-button")}});
scissorsButton.addEventListener("click", () => {if (buttonsDisabled === false){playRound(".scissors-button")}});





let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let playerIdle = document.getElementById("playerIdle");
let playerWalk = document.getElementById("playerWalk");
let enemyIdle= document.getElementById("enemyIdle");

