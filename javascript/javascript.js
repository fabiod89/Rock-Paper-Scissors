
function draw() {
    const ctx = document.getElementById('canvas').getContext('2d');
    const img = new Image();
    img.onload = function() {
      ctx.drawImage(img, 0, 50);
      
    };

    img.src = "assets/player/player-idle.gif";
  }

  function draw2() {
    const ctx = document.getElementById('canvas').getContext('2d');
    const img = new Image();
    ctx.drawImage(img, 250, 50);
    img.onload = function() {
      

    };
    img.src = "assets/player/player-idle.gif";
  }


draw()


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

function computerSelect(){
    let choice = ".paper-button"
    buttonAnimation(choice)

}

function buttonAnimation(choice){
    document.querySelector(choice).querySelector("img").style.borderColor = "green"
}


function playerSelect(choice){
    buttonAnimation(choice)
    message.innerHTML = "Computer is choosing..."
    setTimeout( () => {computerSelect()}, 2000);
}