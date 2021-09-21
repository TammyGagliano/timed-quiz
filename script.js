// All required elements
var start_btn = document.querySelector(".start_btn button");
var info_box = document.querySelector(".info_box");
var quit_btn = document.querySelector(".buttons quit");
var restart_btn = document.querySelector(".buttons restart");
var quiz_box = document.querySelector(".quiz_box");

//If start quiz button is clicked show the information box
start_btn.onclick = () =>{
    info_box.classList.add("CSS INFO HERE");
}

//If exit quiz button is clicked hide the information box
quit_btn.onclick = () =>{
    info_box.classList.remove("CSS INFO HERE");
}

//If restart quiz button is clicked
restart_btn.onclick = () =>{
    info_box.classList.remove("CSS INFO HERE"); // hide the info box
    quiz_box.classList.add("CSS INFO HERE"); // show the info box
}