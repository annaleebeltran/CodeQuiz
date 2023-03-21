var viewHighLink = document.getElementById("highscore")
var feedback = document.getElementById('correction')
var finalScore = document.getElementById('scoreDisplay')
var initialsFinal = document.getElementById('initialsInput')
var submitInitalBtn = document.getElementById('submitInitials')
var highscoreList = document.getElementById('highscoresList')
var goBackBtn = document.getElementById('goBack')
var clearHighBtn = document.getElementById('clearHigh')


var questions = [
	{
		question: "CSS stands for:",
		choices: ["Cascading Style Sheet",
			"Cascading Sheet Styler",
			"Computer Stand Still",
            " I do not know"],
		correctAnswer: "Cascading Style Sheet",
	},
	{
		question: "Inside whitch HTML element is used inside the JavaScript?",
			choices:[ "<javascript>",
			"<script>",
			 "<js>",
             "I do not know"],
		correctAnswer: "<scipt>",
	},
    {
		question: "In JavaScript syntax, write out: Hello World",
			choices: ["'Hello World'",
			"response.writeout('Hello World')",
			"document.write('Hello World'",
            "I do know know"],
		    correctAnswer:"document.write('Hello World'",
	},
    {
		question: "Write 'Hello world' on a alert box",
			choices:[ "alertbox('Hello World')",
		    "textalert('Hello World')",
			"I do not know",
            "alert('Hello World')"],
		    correctAnswer:"alert('Hello World')",
	}
];
var timeRemaining = 60;
var questionCounter = 0;
var startBtn = document.getElementById("start");

//This function will initiate the quiz
function quizBegins() {
    //start button disappears
    document.getElementById("prompt").setAttribute("class", "hidePage")
    //the question list appears
    document.getElementById("questionDisplay").setAttribute("class", "")
    //startTimer begins
    startTimer()
    //questions populate
    nextQuestion()
}

function startTimer() {
    console.log("timer called")
    var quizInterval = setInterval(function() {
        timeRemaining--;
        document.getElementById("timer").textContent = timeRemaining;

        //when else does our quiz end
        //your answer: when the last question is answered
        if(timeRemaining <= 0) {
            clearInterval(quizInterval)
        }
    }, 1000)
}



//This function will display the next question
function nextQuestion() {
    document.getElementById("questionChoice").textContent = questions[questionCounter].question;
    var answerDiv = document.getElementById("answerList");
    answerDiv.innerHTML = ""

    for(i=0; i<questions[questionCounter].choices.length; i++) {
        var choiceText = questions[questionCounter].choices[i];
        var newBtn = document.createElement("button");
        newBtn.textContent = choiceText;
        newBtn.addEventListener("click", checkAnswer)
        
        answerDiv.append(newBtn)
    }
}
//This function checks if the anser is right or wrong
function checkAnswer(event) {
    console.log(event.target.textContent)
}

// This function will display the final page when the all the quesions have been answered
function displayFinal() {

}

//When quiz is done, Initials will need to be inputed, to be stored in local storage
submitInitalBtn.addEventListener('click', function(event) {
    event.preventDefault()
   
})

//This button will go back to start the quiz over again
goBackBtn.addEventListener('click', function(event) {
    event.preventDefault()
    
})

//This button will clear the highscores
clearHighBtn.addEventListener('click', function(event) {
    var confirm = confirm("This will clear your highscore, are you sure you would like to continue?")

})

//When the HIGHSCORE link is clicked, it will display the high scores
viewHighLink.addEventListener('click', function(event) {
    event.preventDefault()
    
})

//This function stores the user has taken
function displayHighPage() {

    }


startBtn.addEventListener("click", quizBegins)


//init();