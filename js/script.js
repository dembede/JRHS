let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const gameWrapper = document.querySelector(".game");

let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  console.log(userGuess);
  if (guessCount === 1) {
    guesses.textContent = "previous guesses: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Bingo! You got it right!!!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!! GAME OVER !!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

function setGameOver() {
  guessField.setAttribute.disabled = true;
  guessSubmit.setAttribute.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  gameWrapper.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}
function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  resetParas.forEach((para) => {
    para.textContent = "";
  });

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "transparent";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

guessSubmit && guessSubmit.addEventListener("click", checkGuess);

const myInt = 5;
const myFloat = 6.667782347852097;
// console.log("typeof myInt", typeof myInt);
// console.log("typeof myFloat", typeof myFloat);
// console.log("myFloat", myFloat);
// console.log("myFloat.toFixed(2)", myFloat.toFixed(2));

let num1 = 50 * (50 % 9);
// num1--;
console.log(`I have a phone.
its color is red`);

let firstName = "Sammy";
console.log("firstName", firstName);

// firstName = firstName.replace("my", "wel");
// console.log("updated firstName", firstName);

firstName = firstName.replace("m", "n");
console.log("re-updated firstName", firstName);
