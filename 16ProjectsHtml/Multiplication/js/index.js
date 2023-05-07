const randomNumber1 = Math.ceil(Math.random()*10);
const randomNumber2 = Math.ceil(Math.random()*10);

const questionElement = document.getElementById("question");

const formElement = document.getElementById("form");

const inputElement = document.getElementById("input");

const scoreElement = document.getElementById("score");

const answer = document.getElementById("answer");

questionElement.innerText = `What is ${randomNumber1} multiply by ${randomNumber2} ?`;

const correctAnswer = randomNumber1 * randomNumber2 ;

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

scoreElement.innerHTML = `score: ${score}`

formElement.addEventListener("submit", ()=> {

    // Convertir l'entrée de l'utilisateur
    const userAnswer = +inputElement.value

    if (userAnswer === correctAnswer) {
        score++
        updateLocalStorage();
        alert("Correct Answer");
    } else {
        score--
        updateLocalStorage();
        alert("Bad Answer")
    }
} )

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}


