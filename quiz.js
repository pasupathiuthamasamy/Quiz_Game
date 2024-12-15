// Selection questions
var quiz_1 = document.getElementsByName("1.quiz")
var quiz_2 = document.getElementsByName("2.quiz")
var quiz_3 = document.getElementsByName("3.quiz")
var quiz_4 = document.getElementsByName("4.quiz")
var quiz_5 = document.getElementsByName("5.quiz")
var quiz_6 = document.getElementsByName("6.quiz")
var quiz_7 = document.getElementsByName("7.quiz")
var quiz_8 = document.getElementsByName("8.quiz")
var quiz_9 = document.getElementsByName("9.quiz")
var quiz_10 = document.getElementsByName("10.quiz")

// Selecting buttons
var nextButtons = document.querySelectorAll(".next")
var previousButtons = document.querySelectorAll(".previous")
var submitButton = document.querySelector(".submit")
var questionContainers = document.querySelectorAll(".question-contain")
var timerElement = document.getElementById("timer")

var totalTime = 180; // 180 seconds = 3 minutes
var score = 0;
var timeup = 0;

// Timer logic
var timer = setInterval(function() {
    var minutes = Math.floor(totalTime / 60);
    var seconds = totalTime % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timerElement.textContent = `Time left: ${minutes}:${seconds}`;
    totalTime--;
   
    if (totalTime < 0) {
        clearInterval(timer);
        alert("Time's up! View result");
        timeup = 1;
        submitButton.click();
    }
}, 1000);

// Adding event listeners to the next, previous, submit buttons
for (let i = 0; i < nextButtons.length; i++) {
    nextButtons[i].addEventListener("click", function(event) {
        event.preventDefault();
        questionContainers[i].style.display = "none";
        questionContainers[i + 1].style.display = "block";
    });
}

for (let i = 0; i < previousButtons.length; i++) {
    previousButtons[i].addEventListener("click", function(event) {
        event.preventDefault();
        questionContainers[i + 1].style.display = "none";
        questionContainers[i].style.display = "block";
    });
}


if (submitButton) {
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        clearInterval(timer);

        for (let i = 0; i < quiz_1.length; i++) {
            if (quiz_1[i].checked && quiz_1[i].value == "Asia") score++;
            if (quiz_2[i].checked && quiz_2[i].value == "2017") score++;
            if (quiz_3[i].checked && quiz_3[i].value == "Mahatma Gandhi") score++;
            if (quiz_4[i].checked && quiz_4[i].value == "Sachin Tendulkar") score++;
            if (quiz_5[i].checked && quiz_5[i].value == "Muhammad Ali") score++;
            if (quiz_6[i].checked && quiz_6[i].value == "Kerala") score++;
            if (quiz_7[i].checked && quiz_7[i].value == "Tokyo") score++;
            if (quiz_8[i].checked && quiz_8[i].value == "Mango") score++;
            if (quiz_9[i].checked && quiz_9[i].value == "Dr.B.R.Ambedkar") score++;
            if (quiz_10[i].checked && quiz_10[i].value == "Draupadi Murmu") score++;
        }

        localStorage.setItem("Score", score);
        localStorage.setItem("timeUp", timeup);
        alert("Yeah Buddy! Your Quiz has been submitted successfully!");
        window.location.href = "result.html";
    });
}