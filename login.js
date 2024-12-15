    document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var nameError = document.querySelector(".nameerror");
    var mailError = document.querySelector(".mailerror");
    
    // Using the same regex you provided in the original form
    var namepattern=/^[a-zA-Z]+$/
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Name validation
    if (name === "" || namepattern.test(name)) {
        nameError.style.display = "block";
    } else {
        nameError.style.display = "none";
    }

    // Email validation
    if (email === "" || !emailPattern.test(email)) {
        mailError.style.display = "block";
    } else {
        mailError.style.display = "none";
    }

    // Store in localStorage and redirect if both are valid
    if (name !== "" && emailPattern.test(email)) {
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        window.location.href = "instruction.html"; // Redirect to the quiz page
    }
});
