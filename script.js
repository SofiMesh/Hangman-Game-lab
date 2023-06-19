
//references

const letterContainer = document.getElementById("letter-container");
const inputBox = document.getElementById("input-box");
const result = document.getElementById("result");
// const canvas = document.getElementById("canvas");
const newGame = document.getElementById("new-game");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");



//display words for the game

let wordOptions = ["Lion", "Tiger", "Wolf", "Fox", "Racoon", "Monkey"];

//count points
let winCount = 0;
let count = 0;
let chosenWord = "";


//

let button = document.createElement("div");
for (let value in options) {
    button.unnerHTML += `button class="options" onclick="generateWord(`${value}`)">${value}</button`;
}


//letters
const blocker = () => {
    let letterButtons = document.querySelectorAll(".letters");

letterButtons.forEach((button) => {
    button.disable.true;
});
newGame.classList.remove("hide");
}



//play game button




//display input box


//display hanging device

//generate words


//hide letters and clear the previous word

//disable  buttons


