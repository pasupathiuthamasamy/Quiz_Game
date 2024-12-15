window.onload = function() {
    var userName = localStorage.getItem("userName");
    var userEmail = localStorage.getItem("userEmail");
    var score = localStorage.getItem("Score");
    var timeUp = localStorage.getItem("timeUp");

    var username = document.getElementById("username");
    var useremail = document.getElementById("usermail");

    username.textContent = `Name: ${userName} `;
    useremail.textContent= `Email: ${userEmail}` 
    scoreInfo.textContent = `Congratulation❤️!!Your score is: ${score} ${timeUp == 1 ? "(Time's up!)" : ""}`;
}
