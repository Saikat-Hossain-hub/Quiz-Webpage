const questions=[
    {
        questions:"The whole number wich does not have a predecessor in whole number system?",
        answers:[
            { text: "0", correct: true},
            { text: "1", correct: false},
            { text: "2", correct :false},
            { text: "none of these", correct :false},
        ]
    },
    {
        questions:"Electric bulb filament is made of ?",
        answers:[
            { text: "Copper", correct: false},
            { text: "Aluminium", correct: false},
            { text: "Lead", correct :false},
            { text: "Tungsten", correct :true},
        ]
    },
    {
        questions:"If 1 is added to the greatest 7-digit number, it will be equal to ?",
        answers:[
            { text: "10 thousand", correct: false},
            { text: "1 lakh", correct: false},
            { text: "10 lakh", correct :true},
            { text: "1 crore", correct :false},
        ]
    },
    {
        questions:"Which of the following is a non metal that remains liquid at room temperature?",
        answers:[
            { text: "Phosphorus", correct: false},
            { text: "Bromine", correct: true},
            { text: "Chlorine", correct :false},
            { text: "Helium", correct :false},
        ]
    },
    {
        questions:"In following option which pair is not coprime?",
        answers:[
            { text: "8,10", correct: true},
            { text: "11,12", correct: false},
            { text: "1,3", correct :false},
            { text: "31,33", correct :false},
        ]
    },
    {
        questions:"Which of thefollowing is used in pencils?",
        answers:[
            { text: "Graphite", correct: true},
            { text: "Silicon", correct: false},
            { text: "Charcoal", correct :false},
            { text: "Phosphorous", correct :false},
        ]
    },
    {
        questions:"Number divisible by 5 and 6.But not be divisible by?",
        answers:[
            { text: "60", correct: true},
            { text: "30", correct: false},
            { text: "15", correct :false},
            { text: "10", correct :false},
        ]
    },
    {
        questions:"which of the gas is not known as green house gas?",
        answers:[
            { text: "Methane", correct: false},
            { text: "Nitrous oxide", correct: false},
            { text: "Carbon diode", correct :false},
            { text: "Hydrogen", correct :true},
        ]
    },
    {
        questions:"LCM of 20,15 and 10 is",
        answers:[
            { text: "22222222", correct: true},
            { text: "3333333", correct: false},
            { text: "111111", correct :false},
            { text: "1011011", correct :false},
        ]
    },
    {
        questions:"The hardest substance available on earth is?",
        answers:[
            { text: "Gold", correct: false},
            { text: "Iron", correct: false},
            { text: "Diamond", correct :true},
            { text: "Platium", correct :false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    currentQuestionIndex=0;
    score =0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex +1;
    questionElement.innerHTML= questionNo +"."+currentQuestion.questions;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}


function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect= selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML= `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();