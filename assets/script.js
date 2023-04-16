var startButton = document.querySelector("#start-button");
var progressBar = document.querySelector("header");
var quiz = document.querySelector("#quiz");
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
    //removes starting box from page
    startBox.classList.add("hide");
    startBox.removeAttribute("id");
    //adds question1 to screen
    quiz.classList.remove("hide");
    quiz.classList.add("question-box");
    //starts interval calls countdownTimer function
    setInterval(countdownTimer, 1000);
}

startButton.addEventListener("click", beginGame);

var questionOptions = [
    {
      question: "What age did Bilbo Baggins turn during his birthday celebration in the Shire?",
      answers: {
        a2: "109",
        b2: "110",
        c2: "111",
        d2: "112"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following hobbits was NOT a member of the Fellowship of the Ring?",
      answers: {
        a2: "Meriadoc Brandybuck",
        b2: "Bilbo Baggins",
        c2: "Peregrin Took",
        d2: "Sam-wise Gamgee"
      },
      correctAnswer: "b"
    },
    {
      question: "Which of the following was NOT a gift to the fellowship by Lady Galadriel?",
      answers: {
        a2: "Lembas Bread",
        b2: "Star of Eärendil",
        c2: "Elven cloaks & brooches",
        d2: "Andúril - the Flame of the West"
      },
      correctAnswer: "d"
    },
    {
        question: "Which of the following agents of Mordor was vanquished by Éowyn during the Battle of Pelennor Fields?",
        answers: {
          a2: "the Witch-king of Angmar",
          b2: "Gothmog - Lieutenant of Morgul",
          c2: "Lurtz - the Uruk-hai",
          d2: "Gríma - the Wormtongue"
        },
        correctAnswer: "a"
      },
      {
        question: "How many rings of power were granted to the Dwarf-lords by Sauron?",
        answers: {
          a2: "3",
          b2: "7",
          c2: "9",
          d2: "1"
        },
        correctAnswer: "b"
      }
  ];

//generates random number between 0 and 4
var getRandom = Math.floor(Math.random()*questionOptions.length);

//calls on random question from questionOptions array
var currentQuestion = questionOptions[getRandom];

//populates question-box with question and answers
function createQuestion() {
  var questionHeader = document.querySelector(".question-header");
  var a1 = document.querySelector("#a1");
  var b1 = document.querySelector("#b1");
  var c1 = document.querySelector("#c1");
  var d1 = document.querySelector("#d1");
    questionHeader.textContent = currentQuestion.question;
    a1.textContent = currentQuestion.answers.a2;
    b1.textContent = currentQuestion.answers.b2;
    c1.textContent = currentQuestion.answers.c2;
    d1.textContent = currentQuestion.answers.d2;
};

//calls function (to be added to event listener)
createQuestion();