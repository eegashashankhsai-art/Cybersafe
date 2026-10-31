// CyberSafe Homepage

console.log("Welcome to CyberSafe!");

alert("Welcome to CyberSafe - Stay Safe Online!");
function checkPassword() {

    let password = document.getElementById("password").value;

    let result = document.getElementById("result");

    let suggestions = document.getElementById("suggestions");

    let score = 0;

    let tips = [];

    // Check password length

    if (password.length >= 8) {
        score++;
    } else {
        tips.push("Use at least 8 characters.");
    }

    // Check uppercase letters

    if (/[A-Z]/.test(password)) {
        score++;
    } else {
        tips.push("Add an uppercase letter.");
    }

    // Check lowercase letters

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

    if (password.length === 0) {

        result.innerHTML = "Please enter a password.";

        suggestions.innerHTML = "";

    }

    else if (score <= 2) {

        result.innerHTML = "🔴 Weak Password";

        result.style.color = "red";

        suggestions.innerHTML = tips.join("<br>");

    }

    else if (score <= 4) {

        result.innerHTML = "🟠 Medium Password";

        result.style.color = "orange";

        suggestions.innerHTML = tips.join("<br>");

    }

    else {

        result.innerHTML = "🟢 Strong Password";

        result.style.color = "green";

        suggestions.innerHTML =
            "Excellent! Your sample password meets all five checks.";

    }

}
// Caesar Cipher Encryption

function encryptMessage() {

    let message = document.getElementById("message").value;

    let shift = Number(document.getElementById("shift").value);

    if (message.trim() === "") {
        document.getElementById("output").innerText =
            "Please enter a message.";
        return;
    }

    if (!Number.isInteger(shift) || shift < 0 || shift > 25) {
        document.getElementById("output").innerText =
            "Please enter a shift key between 0 and 25.";
        return;
    }

    let result = "";

    for (let i = 0; i < message.length; i++) {

        let char = message[i];

        if (char >= 'A' && char <= 'Z') {

            let code = char.charCodeAt(0);

            result += String.fromCharCode(
                ((code - 65 + shift) % 26) + 65
            );

        }

        else if (char >= 'a' && char <= 'z') {

            let code = char.charCodeAt(0);

            result += String.fromCharCode(
                ((code - 97 + shift) % 26) + 97
            );

        }

        else {

            result += char;

        }

    }

    document.getElementById("output").innerText = result;

}


// Caesar Cipher Decryption

function decryptMessage() {

    let message = document.getElementById("message").value;

    let shift = Number(document.getElementById("shift").value);

    if (message.trim() === "") {
        document.getElementById("output").innerText =
            "Please enter a message.";
        return;
    }

    if (!Number.isInteger(shift) || shift < 0 || shift > 25) {
        document.getElementById("output").innerText =
            "Please enter a shift key between 0 and 25.";
        return;
    }

    let result = "";

    for (let i = 0; i < message.length; i++) {

        let char = message[i];

        if (char >= 'A' && char <= 'Z') {

            let code = char.charCodeAt(0);

            result += String.fromCharCode(
                ((code - 65 - shift + 26) % 26) + 65
            );

        }

        else if (char >= 'a' && char <= 'z') {

            let code = char.charCodeAt(0);

            result += String.fromCharCode(
                ((code - 97 - shift + 26) % 26) + 97
            );

        }

        else {

            result += char;

        }

    }

    document.getElementById("output").innerText = result;

}