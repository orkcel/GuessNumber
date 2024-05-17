const secretNumber = document.querySelector(".number");

const guess = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const message = document.querySelector(".message");
const scoreInput = document.querySelector(".score");
const highScoreInput = document.querySelector(".highscore");

const randomNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
againBtn.addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "black";
  message.textContent = "Start guessing...";
  scoreInput.textContent = 20;
  secretNumber.textContent = "?";
      guess.value = "";



})

checkBtn.addEventListener("click", function () {
  if (Number(guess.value) > randomNumber) {
    message.textContent = "Too high";
    if (score > 1) {
      score--;
      scoreInput.textContent = score;
    } else {
      scoreInput.textContent = 0;
      message.textContent = "Start guessing...";
    }
  } else if (Number(guess.value) < randomNumber) {
    message.textContent = "Too low";
    if (score > 1) {
      score--;
      scoreInput.textContent = score;
    } else {
      scoreInput.textContent = 0;
      message.textContent = "You lost the game";
    }
    //qalib olan hal
  } else if (Number(guess.value) == randomNumber) {
    message.textContent = "You win the game";
    document.querySelector("body").style.backgroundColor = "green";
    secretNumber.textContent = randomNumber;
    if (score > highScore) {
      highScore = score;
      highScoreInput.textContent = highScore;
    }
  }
});
