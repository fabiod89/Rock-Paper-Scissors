let playerScore = 0;
let computerScore = 0;

// Play a round
function playRound (playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        alert("Tie");
    }
    else if(playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        playerScore++
        alert("You win")
    }
    else if(playerSelection === "ROCK" && computerSelection === "PAPER"){
        computerScore++
        alert("You lose")
    }

    else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        playerScore++
        alert("You win");
    }
    else if(playerSelection === "PAPER" && computerSelection === "SCISSORS"){
        computerScore++
        alert("You lose")
    }

    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        computerScore++
        alert("You lose");
    }
    else if(playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        playerScore++
        alert("You win")
    }

}

//Player choose
let playerSelection = () => {
    let choice = prompt("Choose Rock, Paper or Scissors").toUpperCase()
    return (choice);
}


//Computer choice
let computerSelection = () => {
    let choices = ["ROCK","SCISSORS","PAPER"]
    return (choices[Math.floor(Math.random() * choices.length)]);
}

//Main game function
function game() {
    playRound(playerSelection(),computerSelection());
}


game()

