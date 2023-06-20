
//references

const letterContainer = document.getElementById("letter-container");
const inputBox = document.getElementById("input-box");
const result = document.getElementById("result");
const canvas = document.getElementById("canvas");
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

// let button = document.createElement("div");
// for (let value in options) {
//     button.unnerHTML += `button class="options" onclick="generateWord(`${value}`)">${value}</button`;
// }


//
const blocker = () => {
    let letterButtons = document.querySelectorAll(".letters");

letterButtons.forEach((button) => {
    button.disable.true;
});
newGame.classList.remove("hide");
}

//generate words
const generateWord = (wordOptionsValue) => 

//how to hide and after remove words?

letterContainer.classList.remove("hide");
inputBox.innerHTML = "";

let wordOptionsArray = wordOptions[wordOptions];

//choose rand word
chosenWord = wordOptionsArray[Math.floor(Math.random() * wordOptionsArray.length)];
chosenWord = chosenWord.toUpperCase();

let displayItem = chosenWord.replace(/./g, `<span class="dashes">_</span>`);

inputBox.innerHTML = displayItem;
// }

//when pressed play again button

const initializer = () => {
    winCount= 0;
    count = 0;

    //delete content 

inputBox.innerHTML = "";
letterContainer.classList.add("hide");
newGame.classList.add("hide");
letterContainer.innerHTML = "";

//letter buttons
for (let i = 28; i < 29; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");

    button.innerText = String.fromCharCode(i);

    // eventlisteners

    button.addEventListener("click", () => {
        let charArray = chosenWord.split("");
        let dashes = document.getElementsByClassName("dashes");
        if (charArray.includes(button.innerHTML)) {
            charArray.forEach((char, index) => {
                if (char === button.innerText) {
                    dashes[index].innerText = char;
                    winCount +=1;
                    if (winCount === charArray.length) {
                        result.innerHtml = `<h2 class=win-msg>Player Won!</h2>
                        <p>The word was <span>${chosenWord}</span></p>`;
                        blocker();
                    }
                }
            })
        } else {
            count +=1;
            drawMan(count);
            if (count == 6) {
                result.innerHTML = `<h2 class=lost-msg>Player Lost!</h2>
                <p>The word was <span>${chosenWord}</span></p>`;
                blocker();
            }
        }
        button.disabled = true;
    })
    letterContainer.append(button);
}
displayWordOptions();
let { initialDrawing } = canvaCreator();
initialDrawing();
};
const canvaCreator = () => {
    let context = canva.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 1;
//how to draw Lines

}