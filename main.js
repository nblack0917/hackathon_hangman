let userLives = 1;
let correctGuesses = 3

let word = "HELLO";
let answerArray = word.split("")
let input = "";
console.log(answerArray)
console.log(input)
// console.log(answerArray[3])
// console.log(answerArray.indexOf("E"))

// Get user input on submit button click
document.getElementById("submit").addEventListener("click", function() {
        input = document.getElementById("userInput").value
        console.log("click")
        console.log(input)
    })

// function to get letterBox divs and change them
let letterBoxes = []
letterBoxes = document.getElementsByClassName("letterBox")
console.log(letterBoxes)

// function to check for win
const checkForWin = () => {
    if (correctGuesses === answerArray.length) {
        console.log("you win")
    } else if (userLives === 0) {
        console.log("Game Over")
    }
}
    
    // function to compare user input to answer array
const checkForLetters = (input) => {
    let foundAnswer = []
    for (let i = 0; i < answerArray.length; i++) {
        if (answerArray[i] === input) {
            console.log(i);
            console.log("found");
            foundAnswer.push(i);
            correctGuesses++;
        }
    }
    if (answerArray.indexOf(input) === -1) {
        console.log("not found")
        userLives--
    }
    console.log(foundAnswer)
    checkForWin()
}

checkForLetters(input)



//function to reset game