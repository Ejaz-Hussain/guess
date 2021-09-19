"use strict";

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let guess = 0;

document.querySelector(".check").addEventListener("click", function () {
  guess = Number(document.querySelector(".get-number").value);
  //   console.log(guess);
  //Case when there is no guess
  if (score > 1) {
    if (!guess) {
      document.querySelector("#message").textContent = "No Number!";
      //case if guess is smaller than secret Number
    } else if (guess < secretNumber) {
      document.querySelector("#message").textContent = "Too Low!";
      score--;
      document.querySelector("#score").textContent = score;
      //case if guess is greater than secret Number
    } else if (guess > secretNumber) {
      score--;
      document.querySelector("#score").textContent = score;
      document.querySelector("#message").textContent = "Too High!";
      //case if guess is equal to secret Number
    } else if (guess === secretNumber) {
      document.querySelector("#message").textContent = "You Win!";
      document.querySelector("body").style.backgroundColor = "seagreen";
      document.querySelector(".question-mark").textContent = guess;
      document.querySelector(".box").style = `width: 18rem; height: 8rem;`;

      if (score > highscore) {
        highscore = score;
        document.querySelector("#highscore").textContent = highscore;
      }
      // document.querySelector(".get-number").style = `width:10rem; height:5rem;font-size:2rem`;
    }
  } else {
    document.querySelector("#message").textContent = "You Loose!";
    document.querySelector("body").style.backgroundColor = "red";
    score = 0;
    document.querySelector("#score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector("#score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#333";
  document.querySelector(".question-mark").textContent = "?";
  document.querySelector(".box").style = `width: 10rem; height: 8rem;`;
  document.querySelector(".get-number").value = "";
  document.querySelector("#message").textContent = "Start guessing!!";
});
