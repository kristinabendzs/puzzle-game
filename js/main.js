console.log("Javascript is connected")

//variables
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const dropZones = document.querySelectorAll(".drop-zone");
let draggedPiece;

//functions 
function changeBGImage(event) {
    // console.log here is just for making sure the event listeners are working and connected to the images
    // console.log("ChangeBGimage called");
    // console.log(this.id);

    // METHOD 1
    // console.log(this.id);
    // this is the css property we r changing: 
    // background-image: url('../images/backGround0.jpg');
    // puzzleBoard.style.backgroundImage = `url('./images/backGround${this.id}.jpg')`;


    // METHOD 2
    console.log(event.currentTarget.id);
    puzzleBoard.style.backgroundImage =  `url('./images/backGround${event.currentTarget.id}.jpg')`;
}

function handleStartDrag() {
    console.log(`started dragging ${this}`);
    draggedPiece = this;
}

function handleOver(e) {
    e.preventDefault();
    console.log("dragged over");
}

function handleDrop() {
    if (this.children.length >=1){
        return;
    } 
    else {
        this.appendChild(draggedPiece);
}
}

//event listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));
