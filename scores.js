<<<<<<< HEAD
var goBack = document.querySelector(".go_back");
var viewHighscores = document.querySelector("view_highscores");
var highscoresList = document.querySelector(".highscores_list");
var clearHighscores = document.querySelector(".clear_highscores");
var highscoresContainer = document.querySelector("#highscoresContainer");


// pseudo-link to display highscores
var checkHighscore = function(event) {
    highscoresContainer.style.display = "block";
}
  
// called by "clear highscores" button, clears local storage
var clearScores = function(event) {
    window.localStorage.removeItem("userHighscores");
    window.location.reload();
}


document.getElementById("clear").onclick = clearScores;

// retrieve highscore array data from localstorage
var getHighscores = function() {
  var loggedHighscores = JSON.parse(localStorage.getItem("userHighscores")); 
}

highscoresContainer.style.display = "block";

var goBack = document.querySelector(".go_back");
var viewHighscores = document.querySelector("view_highscores");
var highscoresList = document.querySelector(".highscores_list");
var clearHighscores = document.querySelector(".clear_highscores");
var highscoresContainer = document.querySelector("#highscoresContainer");


// pseudo-link to display highscores
var checkHighscore = function (event) {
  highscoresContainer.style.display = "block";
}


// called by "clear highscores" button, clears local storage
var clearScores = function (event) {
  window.localStorage.removeItem("userHighscores");
  window.location.reload();
}


console.log(localStorage);
checkHighscore();


document.getElementById("clear").onclick = clearScores;


// retrieve highscore array data from localstorage
var getHighscores = function () {
  //changed variable name
  var userHighscores = JSON.parse(localStorage.getItem("userHighscores"));
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

getHighscores();

clearHighscores.addEventListener("click", clearScores);

=======
var goBack = document.querySelector(".go_back");
var viewHighscores = document.querySelector("view_highscores");
var highscoresList = document.querySelector(".highscores_list");
var clearHighscores = document.querySelector(".clear_highscores");
var highscoresContainer = document.querySelector("#highscoresContainer");


// pseudo-link to display highscores
var checkHighscore = function(event) {
    highscoresContainer.style.display = "block";
}
  
// called by "clear highscores" button, clears local storage
var clearScores = function(event) {
    window.localStorage.removeItem("userHighscores");
    window.location.reload();
}


document.getElementById("clear").onclick = clearScores;

// retrieve highscore array data from localstorage
var getHighscores = function() {
  var loggedHighscores = JSON.parse(localStorage.getItem("userHighscores")); 
}

highscoresContainer.style.display = "block";

var goBack = document.querySelector(".go_back");
var viewHighscores = document.querySelector("view_highscores");
var highscoresList = document.querySelector(".highscores_list");
var clearHighscores = document.querySelector(".clear_highscores");
var highscoresContainer = document.querySelector("#highscoresContainer");


// pseudo-link to display highscores
var checkHighscore = function (event) {
  highscoresContainer.style.display = "block";
}


// called by "clear highscores" button, clears local storage
var clearScores = function (event) {
  window.localStorage.removeItem("userHighscores");
  window.location.reload();
}


console.log(localStorage);
checkHighscore();


document.getElementById("clear").onclick = clearScores;


// retrieve highscore array data from localstorage
var getHighscores = function () {
  //changed variable name
  var userHighscores = JSON.parse(localStorage.getItem("userHighscores"));
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

getHighscores();

clearHighscores.addEventListener("click", clearScores);

>>>>>>> 88228cb750cb5b12e7a5c45f943f35c4eb479e7c
