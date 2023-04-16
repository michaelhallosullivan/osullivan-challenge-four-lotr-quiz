var questionOptions = [
    {
      question: "What age did Bilbo Baggins turn during his birthday celebration in the Shire?",
      answers: {
        a2: "109",
        b2: "110",
        c2: "111",
        d2: "112"
      },
      correctAnswer: "111"
    },
    {
      question: "Which of the following hobbits was NOT a member of the Fellowship of the Ring?",
      answers: {
        a2: "Meriadoc Brandybuck",
        b2: "Bilbo Baggins",
        c2: "Peregrin Took",
        d2: "Sam-wise Gamgee"
      },
      correctAnswer: "Bilbo Baggins"
    },
    {
      question: "Which of the following was NOT a gift to the fellowship by Lady Galadriel?",
      answers: {
        a2: "Lembas Bread",
        b2: "Star of Eärendil",
        c2: "Elven cloaks & brooches",
        d2: "Andúril - the Flame of the West"
      },
      correctAnswer: "Andúril - the Flame of the West"
    },
    {
        question: "Which of the following agents of Mordor was vanquished by Éowyn during the Battle of Pelennor Fields?",
        answers: {
          a2: "the Witch-king of Angmar",
          b2: "Gothmog - Lieutenant of Morgul",
          c2: "Lurtz - the Uruk-hai",
          d2: "Gríma - the Wormtongue"
        },
        correctAnswer: "the Witch-king of Angmar"
      },
      {
        question: "How many rings of power were granted to the Dwarf-lords by Sauron?",
        answers: {
          a2: "3",
          b2: "7",
          c2: "9",
          d2: "1"
        },
        correctAnswer: "7"
      }
]

var startButton = document.querySelector("#start-button");
var progressBar = document.querySelector("header");
var quiz = document.querySelector("#quiz");
var questionBox = document.querySelector(".question-box");
var timerContainer = document.querySelector("#time");
var time = 360;
var scoreContainer = document.querySelector("#score");
var score = 0;
var questionButton = document.querySelector(".question-button");
var questionHeader = document.querySelector(".question-header");
//generates random number between 0 and 4
var getRandom = Math.floor(Math.random()*questionOptions.length);
//calls on random question from questionOptions array
var currentQuestion = questionOptions[getRandom];
var a1 = document.querySelector("#a1");
var b1 = document.querySelector("#b1");
var c1 = document.querySelector("#c1");
var d1 = document.querySelector("#d1");
var nextButton = document.createElement("button");
    nextButton.textContent = "Next Question";
    

function beginGame() {
    var content = document.querySelector(".content");
    var startBox = document.querySelector("#start-box");
    //removes doors of during upon entering
    content.style.setProperty("background-image", "none");
    //adds progressbar to top of screen
    progressBar.classList.remove("hide");
    //removes starting box from page
    startBox.classList.add("hide");
    startBox.removeAttribute("id");
    //adds question1 to screen
    quiz.classList.remove("hide");
    quiz.classList.add("question-box");
    //starts interval calls countdownTimer function
    setInterval(countdownTimer, 1000);
    //randomly inputs question data
    createQuestion();
}

function countdownTimer() {
    if (time > 0) {
    time--;
    timerContainer.textContent = time;
    scoreContainer.textContent = score;
    }
    if (time === 0) {
    gameOver();
    }
}

function createQuestion() {
    questionHeader.textContent = currentQuestion.question;
    a1.textContent = currentQuestion.answers.a2;
    b1.textContent = currentQuestion.answers.b2;
    c1.textContent = currentQuestion.answers.c2;
    d1.textContent = currentQuestion.answers.d2;
/*creates new array called previousQuestions, containing the question that was selected at random.
that question is removed from the array called questionOptions
questionOptions.length is updated (-1)
*/
    var previousQuestions = questionOptions.splice(getRandom, 1);
    console.log(questionOptions.length);
    console.log(previousQuestions.length);
}

function checkAnswer() {
    a1.classList.add("hide");
    a1.classList.remove("question-button");
    b1.classList.add("hide");
    b1.classList.remove("question-button");
    c1.classList.add("hide");
    c1.classList.remove("question-button");
    d1.classList.add("hide");
    d1.classList.remove("question-button");
    if (this.textContent === currentQuestion.correctAnswer) {
        score++;
        questionHeader.textContent = "CORRECT";
    }
    else {
        time = time - 30;
        questionHeader.textContent = "INCORRECT";   
    }
    quiz.appendChild(nextButton);
    nextButton.classList.add("question-button");
    nextButton.classList.remove("hide");
}

function nextQuestion() {
    nextButton.classList.remove("question-button");
    nextButton.classList.add("hide");
    a1.classList.remove("hide");
    a1.classList.add("question-button");
    b1.classList.remove("hide");
    b1.classList.add("question-button");
    c1.classList.remove("hide");
    c1.classList.add("question-button");
    d1.classList.remove("hide");
    d1.classList.add("question-button");
    var getRandom = Math.floor(Math.random()*questionOptions.length);
    var currentQuestion = questionOptions[getRandom];
    questionHeader.textContent = currentQuestion.question;
    a1.textContent = currentQuestion.answers.a2;
    b1.textContent = currentQuestion.answers.b2;
    c1.textContent = currentQuestion.answers.c2;
    d1.textContent = currentQuestion.answers.d2;
    var previousQuestions = questionOptions.splice(getRandom, 1);
    console.log(questionOptions.length);
    console.log(previousQuestions.length);
    if (questionOptions.length === 0) {
        showResults();
    }
}

function gameOver() {
    progressBar.style.setProperty("color", "red");
}

function showResults() {
    nextButton.classList.remove("question-button");
    nextButton.classList.add("hide");
    a1.classList.add("hide");
    a1.classList.remove("question-button");
    b1.classList.add("hide");
    b1.classList.remove("question-button");
    c1.classList.add("hide");
    c1.classList.remove("question-button");
    d1.classList.add("hide");
    d1.classList.remove("question-button");
}

startButton.addEventListener("click", beginGame);
a1.addEventListener("click", checkAnswer);
b1.addEventListener("click", checkAnswer);
c1.addEventListener("click", checkAnswer);
d1.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", nextQuestion);


//fix CORRECT vs INCORRECT