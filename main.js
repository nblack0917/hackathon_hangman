let userLives = 6;
let correctGuesses = 0

let word = "HELLO";
let answerArray = word.split("")
let input = "";
console.log(answerArray)
console.log(input)
// console.log(answerArray[3])
// console.log(answerArray.indexOf("E"))

//function to submit letters
const submitLetters = () => {
    input = document.getElementById("userInput").value.toUpperCase()
    console.log("click")
    console.log(input)
    if (input !== "") {
        checkForLetters(input)
        document.getElementById("userInput").value = "";
    }
}
// function to get letterBox divs and change them
let letterBoxes = []
letterBoxes = document.getElementsByClassName("letterBox")
// console.log(letterBoxes)
for (let i = 0; i < letterBoxes.length; i++) {
    letterBoxes[i].innerHTML = "&#10240;"
}

// function to check for win
const checkForWin = () => {
    if (correctGuesses === answerArray.length) {
        console.log("you win")
        document.getElementById("returnResult").innerHTML = `You guessed the word! Contrats!`
    } else if (userLives === 0) {
        console.log("Game Over")
        document.getElementById("returnResult").innerHTML = `Game over. You did not guess the word.`
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
            letterBoxes[i].innerHTML = input
            answerArray[i] = null;
            correctGuesses++;
            document.getElementById("returnResult").innerHTML = `Correct! You got ${foundAnswer.length} letters`
        }
    }
    if (answerArray.indexOf(input) === -1) {
        console.log("not found")
        userLives--
        document.getElementById("userLives").innerHTML = userLives
        document.getElementById("returnResult").innerHTML = `That letter is incorrect. Lose 1 life.`
    }
    console.log(foundAnswer)
    checkForWin()
}

//function to reset game

document.getElementById("reset").addEventListener("click", function() {
        console.log("reset")
        userLives = 6;
        document.getElementById("userLives").innerHTML = userLives
        correctGuesses = 0
        for (let i = 0; i < letterBoxes.length; i++) {
            letterBoxes[i].innerHTML = "&#10240;"
        }
        document.getElementById("returnResult").innerHTML = null
    })

// Get user input on submit button click
document.getElementById("submit").addEventListener("click", function() {
    submitLetters()
})

document.getElementById("userInput").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        submitLetters()
    }
    });