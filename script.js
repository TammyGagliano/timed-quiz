// Declare variables 
var viewHighscores = document.querySelector("view_highscores");
var timeCount = document.querySelector(".timer");
var startBtn = document.querySelector(".start_btn");
var welcomeMsg = document.querySelector(".welcome_msg");
var quizContainer = document.querySelector(".question_container");
var quizQuestions = document.querySelector(".quiz_questions");
var opt1 = document.querySelector(".opt1");
var opt2 = document.querySelector(".opt2");
var opt3 = document.querySelector(".opt3");
var opt4 = document.querySelector(".opt4");
var correctIncorrect = document.querySelector("correct-incorrect");
var doneForm = document.querySelector("done_form");
var finalScore = document.querySelector(".final_score");
var initials = document.querySelector(".initials");
var submitHighscore = document.querySelector(".submit_highscore");
var highscoresList = document.querySelector(".highscores_list");
var goBack = document.querySelector(".go_back");
var clearHighscores = document.querySelector(".clear_highscores");


// hide every container except the welcome container
questionContainer.style.display = "none";
doneContainer.style.display = "none";


startBtn.addEventListener('click', beginQuiz);



// Declare global variables
var userScore;
var timeLeft;
var i;

// Event triggers timer on button click and shows user a display on page
// set score to 0 and timer to 120 sec; populate first question
var beginQuiz = function(event) {
  console.log('button click');
  userScore = 0;
  timeLeft = 120;
  i = 0;
  var timeInterval = setInterval(function() {
    timeCount.textContent = "Timer: " + timeLeft;
    timeLeft--;
  
    if (timeLeft <= 0) {
      timeCount.textContent = "Timer: ";
      clearInterval(timeInterval);
      endGame();
    }
    if (i >= questions.length - 1) {
      timeCount.textContent = "Timer: ";
      clearInterval(timeInterval);
    }
  }, 1000);
  beginQuestions();
};

// hide unnecessary containers; populate questions according to "i" number
var beginQuestions = function(event) {
    event.preventDefault();
  
    quizQuestion.textContent = questions[i]["question"];
  
    opt1.textContent = myQuestions[i]["option"][0];
    opt2.textContent = myQuestions[i]["option"][1];
    opt3.textContent = myQuestions[i]["option"][2];
    opt4.textContent = myQuestions[i]["option"][3];
  
    if (i >= myQuestions.length - 1) {
        
      endGame();
    }
  }

  
  