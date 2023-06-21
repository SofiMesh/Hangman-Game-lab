
//references

const letterContainer = document.getElementById("letter-container");
const categoryContainer = document.getElementById("category-container");
const inputBox = document.getElementById("input-box");
const resultMsg = document.getElementById("result-msg");
const canvas = document.getElementById("canvas");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button")
// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");



//display words for the game

let wordOptions = ["Lion", "Tiger", "Wolf", "Fox", "Racoon", "Monkey"];

//count points
let winCount = 0;
let count = 0;
let chosenWord = "";


//

// let button = document.createElement("div");
// for (let value in wordOptions) {
//     button.innerHTML += `<button class="wordOptions" onclick="generateWord(`${value}`)">${value}</button`;
// }


//
const blocker = () => {
    let letterButtons = document.querySelectorAll(".letters");
//disable letters
letterButtons.forEach((button) => {
    button.disable.true;
});
newGame.classList.remove("hide");
}

//generate words
// const generateWord = (wordOptionsValue) => {
//     let wordOptionsButton = 
// }

//how to hide and after remove words?

letterContainer.classList.remove("hide");
inputBox.innerText = "";

let wordOptionsArray = wordOptions[wordOptions];

//choose random word
// chosenWord = wordOptionsArray[Math.floor(Math.random() * wordOptionsArray.length)];
// chosenWord = chosenWord.toUpperCase();

const chosenNumber = Math.floor(Math.random() * wordOptions.length);
console.log(wordOptions[randomNumber]);
const





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
            drawman(count);
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
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 10;
//how to draw Lines
const drawLine = (fromX, FromY, toX, toY) => {
context.moveTo(fromX, fromY);
context.lineTo(taX, toY);
context.strock();
};

const head = () => {
    context.beginPath();
    context.arc(70, 30, 10, 0, Math.PI * 2, true);
    context.strock();
};
const body = () => {
    drawLine( 70, 40, 70, 80);
};

const rightArm = () => {
    drawLine(70, 50, 90, 70);
};
const leftArm = () => {
    drawLine (70, 50, 90, 70);
};
const rightLeg = () => {
    drawLine(70, 50, 90, 110);
};
const leftLeg = () => {
    drawLine(70, 50, 90, 110);
};
//frame
const initialDrawing = () => {
    context.clearReact(0, 0, context.canvas.width, context.canvas.height);
    drawLine(10, 130, 130, 130);
    drawLine(10, 10, 10, 130);
    drawLine(10, 10, 70, 10);
    drawLine(70, 10, 70, 20);
};
return {initialDrawing, head, body, rightArm, leftArm, rightLeg, leftLeg };
};

const drawman = (count) => {
let { head, body, rightArm, leftArm, rightLeg, leftLeg } = canvaCreator();
switch (count) {
    case 1:
    head();
    break;
    case 2:
    body();
    break;
    case 3:
    rightArm();
    break;
    case 4:
    leftArm();
    break;
    case 5:
    rightLeg();
    break;
    case 6:
    leftLeg();
    break;
    default:
    break;
}
};
newGameButton.addEventListener("click", initializer);
window.onload = initializer;