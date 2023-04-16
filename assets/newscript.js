const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');



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


function getRandom() { 
  Math.floor(Math.random()*questionOptions.length);
};

var currentQuestion = questionOptions[getRandom];

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

// YOU ARE REVIEWING STEVE'S JAVASCRIPT AND ADJUSTING YOUR CODE. YOU ARE AT LINE 110 TRYING TO GENERATE QUESTIONS

////////////
function showQuestions(myQuestions, quizContainer){
	// we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<myQuestions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in myQuestions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}
/////////////

//////////////
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
/////////////////

//https://simplestepscode.com/javascript-quiz-tutorial/

/*var questions = document.querySelector(".question-button");
questions.addEventListener("click", checkAnswer);
function checkAnswer() {
    var answer = this.dataset.answer;
    if (answer === true) {
        score++;
        scoreContainer.textContent = score;
    }
    else if (answer === false) {
        time = time - 20;
    }
    console.log(score);
}
*/