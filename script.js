// Declare variables 
var timeCount = document.querySelectorAll(".timer");
var startBtn = document.querySelector(".start_btn");
var info = document.querySelector(".info_box");
var quizQuestion = document.querySelector(".quiz_question");
var opt1 = document.querySelector(".opt1");
var opt2 = document.querySelector(".opt2");
var opt3 = document.querySelector(".opt3");
var opt4 = document.querySelector(".opt4");
var correctIncorrect = document.querySelector("correct-incorrect");


var initials = document.getElementById("initials");
// hide every container except the welcome container
questionContainer.style.display = "none";
doneContainer.style.display = "none";





// Declare global variables
var userScore;
var timeLeft;
var i;

// Event triggers timer on button click and shows user a display on page
// set score to 0 and timer to 120 sec; populate first question
var beginQuiz = function(event) {
  userScore = 0;
  timeLeft = 120;
  i = 0;
  var timeInterval = setInterval(function() {
    time.textContent = "Timer: " + timeLeft;
    timeLeft--;
  
    if (timeLeft <= 0) {
      timer.textContent = "Timer: ";
      clearInterval(timeInterval);
      endGame();
    }
    if (i >= questions.length - 1) {
      timer.textContent = "Timer: ";
      clearInterval(timeInterval);
    }
  }, 1000);
  beginQuestions();
};

// hide unnecessary containers; populate questions according to "i" number
var beginQuestions = function() {
    evt.preventDefault();
  
    quizQuestion.textContent = questions[i]["question"];
  
    opt1.textContent = myQuestions[i]["option"][0];
    opt2.textContent = myQuestions[i]["option"][1];
    opt3.textContent = myQuestions[i]["option"][2];
    opt4.textContent = myQuestions[i]["option"][3];
  
    if (i >= myQuestions.length - 1) {
        
      endGame();
    }
  }

