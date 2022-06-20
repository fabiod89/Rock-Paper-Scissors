
let playerHealth = 5
let computerHealth = 5

// Sprite variables
let playerSprite = document.querySelector(".player-sprite")
let playerSpriteIdle = "assets/player/player-idle.gif"
let playerSpriteWalk = "assets/player/player-walk.gif"

// Button assignment
let rockButton = document.querySelector(".rock-button")
let paperButton = document.querySelector(".paper-button")
let scissorsButton = document.querySelector(".scissors-button")

//Enemy Button assignment
let enemyRockButton = document.querySelector(".enemy-rock-button")
let enemyPaperButton = document.querySelector(".enemy-paper-button")
let enemyScissorsButton = document.querySelector(".enemy-scissors-button")

// Button listeners
rockButton.addEventListener("click", () => {playerSelect(".rock-button")})
paperButton.addEventListener("click", () => {playerSelect(".paper-button")})
scissorsButton.addEventListener("click", () => {playerSelect(".scissors-button")})

//Message
let message = document.querySelector(".message")

let computerSelect = () => {
    let choices = [".enemy-rock-button",".enemy-paper-button",".enemy-scissors-button"]
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return (choice)
}

function buttonAnimation(choice){
    document.querySelector(choice).querySelector("img").style.borderColor = "green"
}

function enemyButtonAnimation(choice){
    document.querySelector(choice).querySelector("img").style.borderColor = "red"
}

function calculateRound(playerChoice,computerChoice){

    if (playerChoice === ".rock-button" && computerChoice === ".enemy-rock-button"){
      return ("Tie")
    }else if (playerChoice === ".rock-button" && computerChoice === ".enemy-scissors-button"){
      return ("Player win")
  }else if (playerChoice === ".rock-button" && computerChoice === ".enemy-paper-button"){
    return ("Computer win")
  }

  else if (playerChoice === ".paper-button" && computerChoice === ".enemy-rock-button"){
    return ("Player win")
  }else if (playerChoice === ".paper-button" && computerChoice === ".enemy-scissors-button"){
    return ("Computer win")
}else if (playerChoice === ".paper-button" && computerChoice === ".enemy-paper-button"){
  return ("Tie")
}

  else if (playerChoice === ".scissors-button" && computerChoice === ".enemy-rock-button"){
    return ("Computer win")
  }else if (playerChoice === ".scissors-button" && computerChoice === ".enemy-scissors-button"){
    return ("Tie")
  }else if (playerChoice === ".scissors-button" && computerChoice === ".enemy-paper-button"){
    return ("Player win")
  }

}

function calculateHealth(whoWon){
  if (whoWon === "Tie"){
    message.innerHTML = "Tie!!!"
  }
  else if(whoWon === "Player win"){
    message.innerHTML = "Player attacks!"
  }
  else if(whoWon === "Computer win"){
    message.innerHTML = "Computer attacks!"
  }
}

function playerSelect(playerchoice){
    buttonAnimation(playerchoice)
    message.innerHTML = "Computer is choosing..."
    setTimeout( () => {
      let computerChoice = computerSelect();
      enemyButtonAnimation(computerChoice);
      let whoWon = calculateRound(playerchoice,computerChoice);calculateHealth(whoWon);
    }, 2000);


}