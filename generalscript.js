//Used to have a dynamic nav sidebar for smaller screens
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
const questions =[
    {
        //#1
            question: "How many Henry VIII's wives were named Catherine?",
        answers: [
            { text: "5", correct: false},
            { text: "2", correct: false},
            { text: "4", correct: false},
            { text: "3", correct: true},
        ]
    },
    {
        //#2
        question: "What is the Capital of Finland?",
        answers: [
            { text: "Oslo", correct: false},
            { text: "Helsinki", correct: true},
            { text: "Reykjavik", correct: false},
            { text: "Nyhavn", correct: false},
        ]
    },
    {
        //#3
        question: "Which tennis grand slam is played on a clay surface?",
        answers: [
            { text: "The French open", correct: true},
            { text: "Wimbledon", correct: false},
            { text: "Swedish open", correct: false},
            { text: "Hamburg European open", correct: false},
        ]
    },
    {
        //#4
        question: "From which grain is the Japanese spirit sake made??",
        answers: [
            { text: "Barley", correct: false},
            { text: "Rice", correct: true},
            { text: "Wheat", correct: false},
            { text: "Rye", correct: false},
        ]
    },
    {
        //#5
    question: "How many brains do octopus have?",
    answers: [
        { text: "2", correct: false},
        { text: "5", correct: false},
        { text: "9", correct: true},
        { text: "13", correct: false},
    ]
    },
    {
        //#6
        question: "On average how far away is the moon from the earth in miles?",
        answers: [
            { text: "174,000", correct: false},
            { text: "289,000", correct: false},
            { text: "308,000", correct: false},
            { text: "238,000", correct: true},
        ]
    },
    {
        //#7
        question: "What does the latin word 'tempus' mean in English?",
        answers: [
            { text: "Time", correct: true},
            { text: "Weight", correct: false},
            { text: "Wind", correct: false},
            { text: "Tempeture", correct: false},
        ]
    },
    {
        //#8
        question: "Which country in the world is believed to have the most miles of motorway?",
        answers: [
            { text: "America", correct: false},
            { text: "China", correct: true},
            { text: "Russia", correct: false},
            { text: "Germany", correct: false},
        ]
    },
    {
        //#9
        question: "How many permanent teeth do dogs have?",
        answers: [
            { text: "48", correct: false},
            { text: "28", correct: false},
            { text: "42", correct: true},
            { text: "34", correct: false},
        ]
    },
    {
        //#10
        question: "In what year did the Beatles split up?",
        answers: [
            { text: "1970", correct: true},
            { text: "1965", correct: false},
            { text: "1968", correct: false},
            { text: "1963", correct: false},
        ]
    },
    {
        //#11
        question: "Gary and Martin Kemp were in what band?",
        answers: [
            { text: "Kiss", correct: false},
            { text: "Darkside", correct: false},
            { text: "Blur", correct: false},
            { text: "Spandau Ballet", correct: true},
        ]
    },
    {
        //#12
        question: "What is the name of Dua Lipas 2020 album?",
        answers: [
            { text: "Past Regrets", correct: false},
            { text: "I've always loved you", correct: false},
            { text: "Future Nostalgia", correct: true},
            { text: "Radical Optimism", correct: false},
        ]
    },
    {
        //#13
        question: "When did Big Brother first air on Channel 4?",
        answers: [
            { text: "1999", correct: false},
            { text: "2000", correct: true},
            { text: "2001", correct: false},
            { text: "2002", correct: false},
        ]
    },
    {
        //#14
        question: "What was the name of the tower block where DEl Boy and Rodney Trotter lived in Only Fools and Horses?",
        answers: [
            { text: "Nelson Mandela House", correct: true},
            { text: "George Bush Gardens", correct: false},
            { text: "Richard Nixon Plaza", correct: false},
            { text: "Trump Tower", correct: false},
        ]
    },
    {
        //#15
        question: "Which catastroph star makes a cameo appearance in Deadpool 2 as Peter?",
        answers: [
            { text: "Brad Pitt", correct: false},
            { text: "Terry Crews", correct: false},
            { text: "Rob Delaney", correct: true},
            { text: "Hugh Jackman", correct: false},
        ]
    },
    {
        //#16
    question: "What does Bridget Jones name her baby in the films third installment?",
    answers: [
        { text: "Richard", correct: false},
        { text: "William", correct: true},
        { text: "Henry", correct: false},
        { text: "Johnathan", correct: false},
    ]
    },
    {
        //#17
        question: "How many spice options are there at Nandos?",
        answers: [
            { text: "6", correct: true},
            { text: "7", correct: false},
            { text: "8", correct: false},
            { text: "9", correct: false},
        ]
    },
    {
        //#18
        question: "Gouda is a popular cheese originating from which country?",
        answers: [
            { text: "France", correct: false},
            { text: "Switzerland", correct: false},
            { text: "Netherlands", correct: true},
            { text: "Belgium", correct: false},
        ]
    },
    {
        //#19
        question: "Gordon Sumner is the real name of what famous British musician ?",
        answers: [
            { text: "Elton John", correct: false},
            { text: "Sting", correct: true},
            { text: "Paul McCartney", correct: false},
            { text: "Ozzy Osbourne", correct: false},
        ]
    },
    {
        //#20
        question: "Glossectomy is the removal of all of or part of which body part?",
        answers: [
            { text: "Finger", correct: false},
            { text: "Ear", correct: false},
            { text: "Foot", correct: false},
            { text: "Tongue", correct: true},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function getRandomQuestion() {
    let currentQuestionIndex = Math.floor(Math.random() * questions.length);
    return questions[currentQuestionIndex];
  }


function beginQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetQuiz();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", chooseAnswer)
    });
}

function resetQuiz(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function chooseAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === true){
            button.classList.add('correct')
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}


function showScore(){
    resetQuiz();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!` ;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        beginQuiz();
    }
});

beginQuiz();