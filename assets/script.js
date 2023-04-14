var startButton = document.querySelector("#start-button");
var progressBar = document.querySelector("header");
var question1 = document.querySelector("#question1");
var questionBox = document.querySelector(".question-box")

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

    // why does display none work but not add class hide?
    startBox.style.display = "none";
    
}

startButton.addEventListener("click", beginGame);
