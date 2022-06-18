
// Sprite variables
let playerSprite = document.querySelector(".player-sprite")
let playerSpriteIdle = "assets/player/player-idle.gif"
let playerSpriteWalk = "assets/player/player-walk.gif"

// Button assignment
let rockButton = document.querySelector(".rock-button")
let paperButton = document.querySelector(".paper-button")
let scissorsButton = document.querySelector(".scissors-button")

// Button listeners
rockButton.addEventListener("click", () => {playerSelect(".rock-button")})
paperButton.addEventListener("click", () => {playerSelect(".paper-button")})
scissorsButton.addEventListener("click", () => {playerSelect(".scissors-button")})

//Message

let message = document.querySelector(".message")

function buttonAnimation(choice){
    document.querySelector(choice).querySelector("img").style.borderColor = "green"
}


function playerSelect(choice){
    buttonAnimation(choice)
    message.innerHTML = "Computer is choosing..."
    setTimeout( () => {computerSelect()}, 2000);
}

function computerSelect(){
    alert("heyyy")

}