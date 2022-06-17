let playerScore = 0;
let computerScore = 0;

// Play a round
function playRound (playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        alert("Tie");
    }
    else if(playerSelection === "ROCK" && computerSelection === "SCISSORS" || 
            playerSelection === "PAPER" && computerSelection === "ROCK" ||
            playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        playerScore++
        alert("You win")
    }
    else if(playerSelection === "ROCK" && computerSelection === "PAPER" ||
            playerSelection === "PAPER" && computerSelection === "SCISSORS" ||
            playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        computerScore++
        alert("You lose")
    }
}

//Player choose
document.getElementsByName("rock")[0].addEventListener("click", () => {playRound("ROCK",computerSelection())})
document.getElementsByName("paper")[0].addEventListener("click", () => {playRound("PAPER",computerSelection())})
document.getElementsByName("scissors")[0].addEventListener("click", () => {playRound("SCISSORS",computerSelection())})
//Computer choose
let computerSelection = () => {
    let choices = ["ROCK","SCISSORS","PAPER"]
    return (choices[Math.floor(Math.random() * choices.length)]);
}






