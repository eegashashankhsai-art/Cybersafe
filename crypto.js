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
            "Enter a shift key between 0 and 25.";
        return;
    }

    let result = "";

    for (let i = 0; i < message.length; i++) {

        let char = message[i];

        if (char >= 'A' && char <= 'Z') {

            result += String.fromCharCode(
                ((char.charCodeAt(0) - 65 + shift) % 26) + 65
            );

        }

        else if (char >= 'a' && char <= 'z') {

            result += String.fromCharCode(
                ((char.charCodeAt(0) - 97 + shift) % 26) + 97
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
            "Enter a shift key between 0 and 25.";
        return;
    }

    let result = "";

    for (let i = 0; i < message.length; i++) {

        let char = message[i];

        if (char >= 'A' && char <= 'Z') {

            result += String.fromCharCode(
                ((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65
            );

        }

        else if (char >= 'a' && char <= 'z') {

            result += String.fromCharCode(
                ((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97
            );

        }

        else {

            result += char;

        }

    }

    document.getElementById("output").innerText = result;

}