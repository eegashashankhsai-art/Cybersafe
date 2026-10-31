function checkPassword() {

    let password = document.getElementById("password").value;

    let result = document.getElementById("result");

    let suggestions = document.getElementById("suggestions");

    let score = 0;
    let tips = [];

    if (password.length === 0) {
        result.innerHTML = "Please enter a password.";
        result.style.color = "red";
        suggestions.innerHTML = "";
        return;
    }

    // Check length
    if (password.length >= 8) {
        score++;
    } else {
        tips.push("Use at least 8 characters.");
    }

    // Check uppercase
    if (/[A-Z]/.test(password)) {
        score++;
    } else {
        tips.push("Add an uppercase letter.");
    }

    // Check lowercase
    if (/[a-z]/.test(password)) {
        score++;
    } else {
        tips.push("Add a lowercase letter.");
    }

    // Check numbers
    if (/[0-9]/.test(password)) {
        score++;
    } else {
        tips.push("Add a number.");
    }

    // Check special characters
    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    } else {
        tips.push("Add a special character.");
    }

    // Display result
    if (score <= 2) {
        result.innerHTML = "🔴 Weak Password";
        result.style.color = "red";
    }

    else if (score <= 4) {
        result.innerHTML = "🟠 Medium Password";
        result.style.color = "orange";
    }

    else {
        result.innerHTML = "🟢 Strong Password";
        result.style.color = "green";
    }

    suggestions.innerHTML = tips.join("<br>");

}