const quizData = [
{
    question: " How old is Michael?",
    a: "20",
    b: "18",
    c: "21",
    d: "none of the above.",
    correct: "c"
},{
    question: "What is my favorite video game?",
    a: "Counter Strike Global-Offensive",
    b: "Overwatch",
    c: "Rocket League",
    d: "Both a and c",
    correct: "d"
},{
    question: "How long have I been coding?",
    a:"2 months",
    b:"2 years",
    c:"Since I was 13 years old",
    d: "4 years",
    correct: "a"
}
];
const quiz = document.getElementById("quiz");
const answers = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")


let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselectAnswer()
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}
function getPicked(){
  
    let answer = undefined;
    answers.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
function deselectAnswer(){
    answers.forEach((answerEl) => {
        answerEl.checked = false;
    });

}

submitBtn.addEventListener("click", () => {
    const answer = getPicked();
    console.log(answer);
    if(answer){
        if(answer)
        {if(answer === quizData[currentQuiz].correct){
            score++
        }

            currentQuiz++;
            if(currentQuiz < quizData.length){
                loadQuiz();
            } else{
               quiz.innerHTML = `<h2>Your answered correctly at ${score}/${quizData.length} questions.</h2>`
            }
        }
    
    
    
      
    
    }
    
})