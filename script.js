
//references

const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const inputBox = document.getElementById("input-box");
const resultMsg = document.getElementById("result-msg");
const canvas = document.getElementById("canvas");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button")




//display options 

let options = {
   animals: ["Lion", "Tiger", "Wolf", "Fox", "Raccoon", "Monkey"],
//    fish: ["salmon", "tuna", "seabass"]
}
//count points
let winCount = 0;
let count = 0;
let chosenWord = "";


//display option button
const displayOptions = () => {
   optionsContainer.innerHTML += `<h3>Select An Option</h3>`;
   let buttonCon = document.createElement("div");
   for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
   }
   optionsContainer.appendChild(buttonCon);
}




//block opt butt
const blocker = () => {
    let optionsButtons = document.querySelectorAll(".options");
    let letterButtons = document.querySelectorAll(".letters");

//disable 
 optionsButtons.forEach((button) => {
    button.disabled = true;
 });
 letterButtons.forEach((button) => {
    button.disabled = true;
 });
 newGameContainer.classList.remove("hide");
};

//word generator
const generateWord = (optionsValue) => {
    let optionsButtons = document.querySelectorAll(".options");
    optionsButtons.forEach((button) => {
        if (button.innerText.toLowerCase() === optionsValue) {
            button.classList.add("active");
        }
        button.disabled = true;
    });



//how to hide and after remove words?

letterContainer.classList.remove("hide");
inputBox.innerText = "";

let optionsArray = options[optionsValue];

//choose random word
chosenWord = optionsArray[Math.floor(Math.random() * optionsArray.length)];
chosenWord = chosenWord.toUpperCase();


//replace dashes with letters

let displayItem = chosenWord.replace(/./g, `<span class="dashes">_</span>`);
inputBox.innerHTML = displayItem;
};


//call func

const initializer = () => {
    winCount= 0;
    count = 0;

    //remove content 

inputBox.innerHTML = "";
optionsContainer.innerHTML = "";
letterContainer.classList.add("hide");
newGameContainer.classList.add("hide");
letterContainer.innerHTML = "";


//letter buttons
for (let i = 65; i < 91; i++) {
let button = document.createElement("button");
button.classList.add("letter");

button.innerText= String.fromCharCode(i);

button.addEventListener("click", () => {
    let charArray = chosenWord.split("");
    let dashes = document.getElementsByClassName("dashes");

    //if array containd clicked value replace match dash

    if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
        if (char === button.innerText) {
            dashes[index].innerText = char;
            winCount += 1;
            if (winCount == charArray.length) {
                resultMsg.innerHTML = `<h2 class='win-msg'>You Win!</h2><p>The word was <span>${chosenWord}</span></p>`;
                //block all the buttons
                blocker();
            }
        }
        });
    } else {
       //if lost
       count += 1; 
       drawMan(count);
       if (count == 6) {
        resultMsg.innerHTML = `<h2 class='lose-msg'>Game Over!</h2><p>Ther word was <span>${chosenWord}</span></p>`;
        blocker();
       }
    }
    //disable clicked btns
    button.disabled = true;
});
letterContainer.append(button);
}

displayOptions();
let { initialDrawing } = canvasCreator();
initialDrawing();
};

const canvasCreator = () => {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 5;


//how to draw Lines
const drawLine = (fromX, fromY, toX, toY) => {
context.moveTo(fromX, fromY);
context.lineTo(toX, toY);
context.stroke();
};

const head = () => {
    context.beginPath();
    context.arc(70, 30, 10, 0, Math.PI * 2, true);
    context.stroke();
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
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    drawLine(10, 130, 130, 130);
    drawLine(10, 10, 10, 131);
    drawLine(10, 10, 70, 10);
    drawLine(70, 10, 70, 20);
};
return {initialDrawing, head, body, rightArm, leftArm, rightLeg, leftLeg };
};

const drawMan = (count) => {
let { head, body, rightArm, leftArm, rightLeg, leftLeg } = canvasCreator();
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
    break;s
    case 6:
    leftLeg();
    break;
    default:
    break;
}
};
newGameButton.addEventListener("click", initializer);
window.onload = initializer;