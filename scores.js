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

      //{
//      userHighscores = [li];
//      console.log(userHighscores)
  //   highscoresList.textContent = "";
  //   console.log(localStorage);
  //   checkHighscore();
  // }

  document.getElementById("clear").onclick = clearScores;

// hide unnecessary containers
// set highscore html element to empty string, populate that string with retrieval and appending of highscore data from local storage
var addHighscore = function(event) {
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

  

//goBack.addEventListener("click", startOver);
//viewHighscores.addEventListener("click", checkHighscore);
clearHighscores.addEventListener("click", clearScores);

