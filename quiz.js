// CyberSafe Quiz

document.getElementById("quizForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let answers = {
        q1: "a",
        q2: "d",
        q3: "b",
        q4: "a",
        q5: "c",
        q6: "b",
        q7: "d",
        q8: "b",
        q9: "c",
        q10: "d"
    };

    let score = 0;

    let total = 10;

    for (let question in answers) {

        let selected = document.querySelector(
            'input[name="' + question + '"]:checked'
        );

        if (selected && selected.value === answers[question]) {

            score++;

        }

    }

    let result = document.getElementById("quizResult");

    result.innerHTML =
        "🎉 Your Score: " + score + " / " + total;

    if (score >= 8) {

        result.innerHTML += "<br>Excellent! You have great cybersecurity knowledge.";

    }

    else if (score >= 5) {

        result.innerHTML += "<br>Good job! Keep learning.";

    }

    else {

        result.innerHTML += "<br>Keep practising and improve your knowledge.";

    }

    document.getElementById("retryButton").hidden = false;

    document.querySelector(".quiz-button").disabled = true;

});


// Restart Quiz

function restartQuiz() {

    document.getElementById("quizForm").reset();

    document.getElementById("quizResult").innerHTML = "";

    document.getElementById("retryButton").hidden = true;

    document.querySelector(".quiz-button").disabled = false;

}