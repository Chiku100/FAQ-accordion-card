let questions = document.querySelectorAll(".question");
let answers = document.querySelectorAll(".answer");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    answers[i].classList.toggle("active-state");
  });
}