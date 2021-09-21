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
go_back.onclick = () =>{
    info_box.classList.remove("CSS INFO HERE");
}

//If restart quiz button is clicked
clear_btn.onclick = () =>{
    info_box.classList.remove("CSS INFO HERE"); // hide the info box
    quiz_box.classList.add("CSS INFO HERE"); // show the info box
    showQuestions(0);
}

var que_count = 0;

// getting questions and options from arrays

function showQuestions(index) {
    var list_text = document.querySelector('.list_text');
    var option_list = document.querySelector('.option_list');


    var que_tag = '<span>' + questions[index].question +'</span>';
    var option_tag = '<div class="option">' + questions[index].options[0] +'</span></span></div>'
                    + '<div class="option">' + questions[index].options[1] +'</span></span></div>'
                    + '<div class="option">' + questions[index].options[2] +'</span></span></div>'
                    + '<div class="option">' + questions[index].options[3] +'</span></span></div>'
                    + '<div class="option">' + questions[index].options[4] +'</span></span></div>'
    list_text.innerHTML= que_tag;
    option_list.innerHTML = option_tag;
    
    var option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick, optionSelected(this)");
    }
}

function optionSelected(answer) {
    var userAns = answer.textContent;
    var correctAns = questions[index].answer;
    console.log("userAns")

}








// adding a paragraph sentence when you click the button

 // var buttons = document.querySelectorAll('button');

// for(let i = 0; i < buttons.length ; i++) {
//     buttons[i].addEventListener('click', createParagraph);
// }


