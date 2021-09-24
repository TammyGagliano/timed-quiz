// Declare variables 
var viewHighscores = document.querySelector("view_highscores");
var timeCount = document.querySelector(".timer");
var startBtn = document.querySelector(".start_btn");
var welcomeMsg = document.querySelector(".welcome_msg");
var quizContainer = document.querySelector(".question_container");
var quizQuestions = document.querySelector(".quiz_questions");
var opt1 = document.querySelector("#opt1");
var opt2 = document.querySelector("#opt2");
var opt3 = document.querySelector("#opt3");
var opt4 = document.querySelector("#opt4");
var correctIncorrect = document.querySelector(".correct-incorrect");
var doneContainers = document.querySelector(".done_container");
var finalScore = document.querySelector(".final_score");
var initials = document.querySelector(".initials");
var submitHighscore = document.querySelector(".submit_highscore");
var highscoresList = document.querySelector(".highscores_list");
var goBack = document.querySelector(".go_back");
var clearHighscores = document.querySelector(".clear_highscores");
var highscoresContainer = document.querySelector("#highscoresContainer");

// Creating an array with questions, options and answers
var questions = [
  { 
      question: "Commonly used data types DO NOT include:",
      options: [ "strings", "boolean", "alerts", "numbers" ],
      answer: "alerts"
  },
  { 
      question: "The condition in an if / else statement is enclosed withing __________.",
      options: [ "quotes", "curly brackets", "parentheses", "square brackets" ],
      answer: "curly brackets"
  },
  { 
      question: "Arrays in Javascript can be used to store __________.",
      options: [ "numbers and strings", "other arrays", "booleans", "all of the above" ],
      answer: "all of the above"
  },
  { 
      question: "String values must be enclosed within __________ when being assigned to variables.",
      options: [ "commas", "curly brackets", "quotes", "parentheses" ],
      answer "quotes"
  },
  {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: [ "Javascript", "terminal / bash", "for loops", "console log" ]
      answer: "console log"
  }
];

// hide every container except the welcome container
questionContainer.style.display = "none";
doneContainer.style.display = "none";
welcomeContainer.style.display = "block";


// Declare global variables
var userScore;
var timeLeft;
var i;

// Event triggers timer on button click and shows user a display on page
// set score to 0 and timer to 120 sec; populate first question
var beginQuiz = function() {
  
  // console.log('Will this show up?');
  
  userScore = 0;
  timeLeft = 120;
 
  var timeInterval = setInterval(function() {
    timeCount.textContent = "Timer: " + timeLeft;
    timeLeft--;
  
    if (timeLeft <= 0) {
      timeCount.textContent = "Timer: ";
      clearInterval(timeInterval);
      endGame();
    }
    // might remove later
   // if (i >= questions.length - 1) {
     // timeCount.textContent = "Timer: ";
      //clearInterval(timeInterval);
   // }
}, 1000);
  beginQuestions();
};

// hide unnecessary containers; populate questions according to "i" number
var beginQuestions = function() {
    //event.preventDefault;
    welcomeContainer.style.display = "none";
    doneContainer.style.display = "none";
    highscoresContainer.style.display = "none";
    questionContainer.style.display = "block";
    
    // I need to call my array of objects first
    console.log(questions);

    // use a forloop to loop the questions
    quizQuestions.textContent = questions[i]["question"];
    opt1.textContent = questions[i]["options"][0];
    opt2.textContent = questions[i]["options"][1];
    opt3.textContent = questions[i]["options"][2];
    opt4.textContent = questions[i]["options"][3];
  
    if (i >= questions.length - 1) {
        
      endGame();
    }
  }

// check answer and display whether correct or incorrect
var checkAnswer = function(event) {
  var userGuess = event.target.id;
  if (userGuess === questions[i]["answer"]) {
    userScore++;
    userGuess.style.backgroundColor = "green";
    correctIncorrect.style.display = "block";
    correctIncorrect.textContent = "Correct! You've earned a point!";
  } else {
    timeLeft -= 10;
    correctIncorrect.style.display = "block";
    correctIncorrect.textContent = "Incorrect! You've lost 10 seconds!";
  }
    i++;
    beginQuestions();
}
  
// called either when timer or questions run out
// hides unnecessary containers, displays user's score
var endGame = function() {
  questionContainer.style.display = "none";
  highscoresContainer.style.display = "none";
  welcomeContainer.style.display = "none";
  doneContainer.style.display = "block";
  finalScore.textContent = "Your final score is: " + userScore;
}
// highscore generation
// set empty array
var userHighscores = [];

// hide unnecessary containers
// set highscore html element to empty string, populate that string with retrieval and appending of highscore data from local storage
var addHighscore = function(event) {
  questionContainer.style.display = "none";
  doneContainer.style.display = "none";
  welcomeContainer.style.display = "none";
  highscoresContainer.style.display = "block";

  highscoresList.innerHTML = "";
  for (var j = 0; j < userHighscores.length; j++) {
    var userHighscore = userHighscores[j];

    var li = document.createElement("li");
    li.textContent = userHighscore;
    li.setAttribute("data-index", j);
    highscoresList.appendChild(li);
  }
}

// retrieve highscore array data from localstorage
var getHighscores = function() {
  var loggedHighscores = JSON.parse(localStorage.getItem("userHighscores"));
  if (userHighscores !== null) {
    userHighscores = loggedHighscores;
  }
  addHighscore();
}

// insert highscore array data into local storage
var storeHighscore = function() {
  localStorage.setItem("userHighscores", JSON.stringify(userHighscores));
}

// event listener to push highscore data into highscore array
submitHighscore.addEventListener("click", function(event) {
  event.preventDefault();
  var userInitialsScore = initials.value + " - " + userScore;
  if (userInitialsScore === "") {
    return;
  }

  userHighscores.push(userInitialsScore);
  initials.value = "";
  storeHighscore();
  getHighscores();
});

// called by "clear highscores" button, clears local storage
var clearScores = function(event) {
  localStorage.clear();
  userHighscores = [];
  console.log(userHighscores)
  highscoresList.textContent = "";
  console.log(localStorage);
  checkHighscore();
}

// called by "go back" button, hides all but welcome container
var startOver = function(event) {
  questionContainer.style.display = "none";
  doneContainer.style.display = "none";
  highscoresContainer.style.display = "none";
  correctIncorrect.style.display = "none";
  welcomeContainer.style.display = "block";
}

// pseudo-link to display highscores
var checkHighscore = function(event) {
  questionContainer.style.display = "none";
  doneContainer.style.display = "none";
  welcomeContainer.style.display = "none";
  highscoresContainer.style.display = "block";
}

// event listeners
startBtn.addEventListener("click", beginQuiz);
opt1.addEventListener("click", checkAnswer);
opt2.addEventListener("click", checkAnswer);
opt3.addEventListener("click", checkAnswer);
opt4.addEventListener("click", checkAnswer);
goBack.addEventListener("click", startOver);
viewHighscores.addEventListener("click", checkHighscore);
clearHighscores.addEventListener("click", clearScores);