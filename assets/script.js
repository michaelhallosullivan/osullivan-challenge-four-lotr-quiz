var startButton = document.querySelector("#start-button");
var progressBar = document.querySelector("header");
var question1 = document.querySelector("#question1");
var questionBox = document.querySelector(".question-box")
var timerContainer = document.querySelector("#time");
var time = 360;
var scoreContainer = document.querySelector("#score");
var score = 0;

function countdownTimer() {
    time--;
    timerContainer.textContent = time;
    scoreContainer.textContent = score;
}

function beginGame() {
    var content = document.querySelector(".content");
    var startBox = document.querySelector("#start-box");
    //removes doors of during upon entering
    content.style.setProperty("background-image", "none");
    //adds progressbar to top of screen
    progressBar.classList.remove("hide");
    //adds question1 to screen
    question1.classList.remove("hide");
    question1.classList.add("question-box");

    //removes starting box from page
    startBox.classList.add("hide");
    startBox.removeAttribute("id");
    //starts interval calls countdownTimer function
    setInterval(countdownTimer, 1000);
}

startButton.addEventListener("click", beginGame);