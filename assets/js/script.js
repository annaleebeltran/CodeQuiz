var timerEl = document.querySelector(".timer-clock");
var startBtn = document.querySelector(".btn");

var scorePoints = 25;
var scoreFinal;
var initials = "";
var timer;
var timerCount;
var correctChoice = [];
var trueChoice = true;



var questions = [
	{
		question: "CSS stands for:",
			a: "Cascading Style Sheet",
			b: "Cascading Sheet Styler",
			c: "Computer Stand Still",
            d: " I do not know",
		    correctAnswer: 1,
	},
	{
		question: "Inside whitch HTML element is used inside the JavaScript?",

			a: "<javascript>",
			b: "<script>",
			c: "<js>",
            d: "I do not know",
		    correctAnswer: 2,
	},
    {
		question: "In JavaScript syntax, write out: Hello World",
		
			a: "'Hello World'",
			b: "response.writeout('Hello World')",
			c: "document.write('Hello World'",
            d: "I do know know",
		    correctAnswer: 3,
	},
    {
		question: "Write 'Hello world' on a alert box",

			a: "alertbox('Hello World')",
			b: "textalert('Hello World')",
			c: "I do not know",
            d: "alert('Hello World')",
		    correctAnswer: 4,
	}
];

//This function calls the quiz with starting grade of 0 and gets all the correct anwser choices from questions variable.
function startQuiz(){
    scoreFinal = 0;
    correctChoice = [...questions];
    timerCount = 60;
    startBtn.disabled = true;
    startTimer();
    questionChoice();
}

function questionChoice(){
if (correctChoice === true){
scoreFinal = scoreFinal + scorePoints;
localStorage.setItem('recent score', scoreFinal)

}



}


function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      if (correctChoice){
        timerCount--;
        timerEl.textContent = timerCount;
        clearInterval(timer);
      }
      
    }, 1000);
  }
  

startBtn.addEventListener("click", startQuiz);

// Calls init() so that it fires when page opened
//init();