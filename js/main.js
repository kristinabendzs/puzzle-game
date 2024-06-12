console.log("Javascript is connected")

//variables
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");

//functions 
function changeBGImage(event) {
    //console.log here is just for making sure they event listeners
    // are working and connected to the images
    console.log("ChangeBGimage called");
    console.log(this.id);

    // METHOD 1
    // changing the background image to the puzzle board
    // this is the css property we r changing: background-image: url('../images/backGround0.jpg');
    // puzzleBoard.style.backgroundImage = `url('./images/backGround${this.id}.jpg')`;


    // METHOD 2
    console.log(event.currentTarget.id);
    puzzleBoard.style.backgroundImage =  `url('./images/backGround${event.currentTarget.id}.jpg')`;
}


//event listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage))