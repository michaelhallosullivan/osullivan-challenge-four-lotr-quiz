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
var time = 90;
var scoreContainer = document.querySelector("#score");
var score = 0;
var questionButton = document.querySelector(".question-button");
var questionHeader = document.querySelector(".question-header");
var index = 0;
var currentQuestion = questionOptions[index];
var a1 = document.querySelector("#a1");
var b1 = document.querySelector("#b1");
var c1 = document.querySelector("#c1");
var d1 = document.querySelector("#d1");
var nextButton = document.createElement("button");
    nextButton.textContent = "Next Question";
var resultsButton = document.createElement("button");
    resultsButton.textContent = "Results";
var tryAgain = document.createElement("button");
    tryAgain.textContent = "Try again?";
    

function beginGame() {
    var content = document.querySelector(".content");
    var startBox = document.querySelector("#start-box");
    content.style.setProperty("background-image", "none");
    progressBar.classList.remove("hide");
    startBox.classList.add("hide");
    startBox.removeAttribute("id");
    quiz.classList.remove("hide");
    quiz.classList.add("question-box");
    setInterval(countdownTimer, 1000);
    createQuestion();
}

function countdownTimer() {
    if (time > 0) {
    time--;
    timerContainer.textContent = time;
    scoreContainer.textContent = score;
    }
    if (time <= 0) {
    gameOver();
    }
}

function createQuestion() {
    questionHeader.textContent = currentQuestion.question;
    a1.textContent = currentQuestion.answers.a2;
    b1.textContent = currentQuestion.answers.b2;
    c1.textContent = currentQuestion.answers.c2;
    d1.textContent = currentQuestion.answers.d2;
}

function hideQuestions() {
  a1.classList.add("hide");
  a1.classList.remove("question-button");
  b1.classList.add("hide");
  b1.classList.remove("question-button");
  c1.classList.add("hide");
  c1.classList.remove("question-button");
  d1.classList.add("hide");
  d1.classList.remove("question-button");
}

function showQuestions() {
  a1.classList.remove("hide");
  a1.classList.add("question-button");
  b1.classList.remove("hide");
  b1.classList.add("question-button");
  c1.classList.remove("hide");
  c1.classList.add("question-button");
  d1.classList.remove("hide");
  d1.classList.add("question-button");
}

function checkAnswer() {
    hideQuestions();
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
    index = index + 1;
    currentQuestion = questionOptions[index];
    nextButton.classList.remove("question-button");
    nextButton.classList.add("hide");
    if (index <= 4) {
      showQuestions();
      createQuestion();
    }
    if (index > 4) {
      gameEnd();
    }
}

function gameOver() {
    progressBar.classList.add("hide");
    hideQuestions();
    nextButton.classList.remove("question-button");
    nextButton.classList.add("hide");
    questionHeader.textContent = "YOU'RE OUT OF TIME!";
    quiz.appendChild(tryAgain);
    tryAgain.classList.add("question-button");
}

function gameEnd() {
    nextButton.classList.remove("question-button");
    nextButton.classList.add("hide");
    hideQuestions();
    questionHeader.textContent = "Click below for results";
    quiz.appendChild(resultsButton);
    resultsButton.classList.add("question-button");
}

function showResults() {
  questionHeader.textContent = "RESULTS";
  resultsButton.classList.add("hide");
  resultsButton.classList.remove("question-button");
  a1.classList.add("question-button");
  a1.classList.remove("hide");
  a1.textContent = time + " seconds left";
  b1.classList.add("question-button");
  b1.classList.remove("hide");
  b1.textContent = score + " question(s) correct";
  progressBar.classList.add("hide");
}

function resetGame() {
  tryAgain.classList.add("hide")
  tryAgain.classList.remove("question-button");
  progressBar.classList.remove("hide");
  time = 90;
  index = 0;
  score = 0;
  showQuestions();
  createQuestion();
}

function saveResults() {

}

startButton.addEventListener("click", beginGame);
a1.addEventListener("click", checkAnswer);
b1.addEventListener("click", checkAnswer);
c1.addEventListener("click", checkAnswer);
d1.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", nextQuestion);
resultsButton.addEventListener("click", showResults);
tryAgain.addEventListener("click", resetGame);

