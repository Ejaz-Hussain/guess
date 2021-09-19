"use strict";

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let guess = 0;

const displayMessage = function (message) {
  document.querySelector("#message").textContent = message;
};

let setScore = function (scoree) {
  document.querySelector("#score").textContent = scoree;
};

document
  .querySelector(".reset-highscore")
  .addEventListener("click", function () {
    document.querySelector("#highscore").textContent = 0;
  });

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector("body").style.backgroundColor = "#333";
  document.querySelector(".question-mark").textContent = "?";
  document.querySelector(".box").style = `width: 10rem; height: 8rem;`;
  document.querySelector(".get-number").value = "";
  setScore(score);
  displayMessage("Start guessing!!");
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});

document.querySelector(".check").addEventListener("click", function () {
  guess = Number(document.querySelector(".get-number").value);

  if (score > 1) {
    if (!guess) {
      displayMessage("No Number");
      console.log("testinggggg");
    } else if (guess < secretNumber) {
      displayMessage("Too Low");
      console.log("testinggggg");
      score--;
      setScore(score);
    } else if (guess > secretNumber) {
      score--;
      setScore(score);
      displayMessage("Too High");
      console.log("testinggggg");
    } else if (guess === secretNumber) {
      displayMessage("You Win!");
      console.log("testinggggg");
      document.querySelector("body").style.backgroundColor = "seagreen";
      document.querySelector(".question-mark").textContent = guess;
      document.querySelector(".box").style = `width: 18rem; height: 8rem;`;
      if (score > highscore) {
        highscore = score;
        document.querySelector("#highscore").textContent = highscore;
      }
    }
  } else {
    document.querySelector("body").style.backgroundColor = "red";
    displayMessage("You Lose");
    score = 0;
    setScore(score);
  }
});
