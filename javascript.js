let playerScore = 0;
let computerScore = 0;

// Play a round
function playRound (playerSelection,computerSelection){
    document.getElementsByName("playerScore")[0].innerHTML = String(playerScore)
    document.getElementsByName("computerScore")[0].innerHTML = String(computerScore)

    document.getElementsByName("playerChoice")[0].src = (playerSelection + ".png");
    document.getElementsByName("computerChoice")[0].src = (computerSelection + ".png");
    if (playerSelection === computerSelection){
        document.getElementsByName("message")[0].innerHTML = "Tie!"
    }
    else if(playerSelection === "ROCK" && computerSelection === "SCISSORS" || 
            playerSelection === "PAPER" && computerSelection === "ROCK" ||
            playerSelection === "SCISSORS" && computerSelection === "PAPER"){

        document.getElementsByName("message")[0].innerHTML = "You win!"
        playerScore++
        
    }
    else if(playerSelection === "ROCK" && computerSelection === "PAPER" ||
            playerSelection === "PAPER" && computerSelection === "SCISSORS" ||
            playerSelection === "SCISSORS" && computerSelection === "ROCK"){

        document.getElementsByName("message")[0].innerHTML = "Computer wins!"
        computerScore++
    }

    if (computerScore === 5){
        alert("Computer wins...")
    }
    else if (playerScore === 5){
        alert("Player wins...")
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







