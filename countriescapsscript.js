//Used to have a dynamic nav sidebar for smaller screens
function showSidebar() {
    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

//Aim is to have 20 questions per quiz
const questions =[
    {
        //#1
            question: "Which country has the longest coastline in the world?",
        answers: [
            { text: "America", correct: false},
            { text: "Brazil", correct: false},
            { text: "Canada", correct: true},
            { text: "Austrailia", correct: false},
        ]
    },
    {
        //#2
        question: "Which country is the newest in the world to be recognised by the UN?",
        answers: [
            { text: "Iran", correct: false},
            { text: "Sudan", correct: true},
            { text: "Iran", correct: false},
            { text: "Egypt", correct: false},
        ]
    },
    {
        //#3
        question: "To the nearest billion, how large is the worlds population?",
        answers: [
            { text: "5", correct: false},
            { text: "6", correct: false},
            { text: "7", correct: false},
            { text: "8", correct: true},
        ]
    },
    {
        //#4
        question: "How many countries still use shillings as currency?",
        answers: [
            { text: "Two", correct: false},
            { text: "Six", correct: false},
            { text: "Four", correct: true},
            { text: "Three", correct: false},
        ]
    },
    {
        //#5
    question: "Which continent is in all four hemispheres?",
    answers: [
        { text: "Europe", correct: false},
        { text: "Africa", correct: true},
        { text: "Asia", correct: false},
        { text: "Antarctica", correct: false},
    ]
    },
    {
        //#6
        question: "What is the capital of Malta?",
        answers: [
            { text: "Cospicua", correct: false},
            { text: "Valetta", correct: true},
            { text: "Vittoriosa", correct: false},
            { text: "Pinto", correct: false},
        ]
    },
    {
        //#7
        question: "Mount Vesuvius casts a shadow over which modern Italian city?",
        answers: [
            { text: "Venice", correct: false},
            { text: "Milan", correct: false},
            { text: "Naples", correct: true},
            { text: "Rome", correct: false},
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
        question: "What is the highest peak in Africa?",
        answers: [
            { text: "Mount Everast", correct: false},
            { text: "Mount Kenya", correct: false},
            { text: "Mount Kilimanjaro", correct: true},
            { text: "Mount Meru", correct: false},
        ]
    },
    {
        //#10
        question: "In what U.S state is Fort Knox?",
        answers: [
            { text: "Kentucky", correct: true},
            { text: "Nevada", correct: false},
            { text: "Texas", correct: false},
            { text: "Arizona", correct: false},
        ]
    },
    {
        //#11
        question: "What is the capital of Peru?",
        answers: [
            { text: "Cusco", correct: false},
            { text: "Puno", correct: false},
            { text: "Arequipa", correct: false},
            { text: "Lima", correct: true},
        ]
    },
    {
        //#12
        question: "What is the largest island in the world?",
        answers: [
            { text: "Austrailia", correct: false},
            { text: "Green Land", correct: true},
            { text: "Britain", correct: false},
            { text: "Japan", correct: false},
        ]
    },
    {
        //#13
        question: "Which city currently has the highest population in the world?",
        answers: [
            { text: "Shanghai", correct: false},
            { text: "Beijing", correct: false},
            { text: "Tokyo", correct: true},
            { text: "New York", correct: false},
        ]
    },
    {
        //#14
        question: "What is the name of the microstate located between Spain and France?",
        answers: [
            { text: "Latvia", correct: false},
            { text: "Andorra", correct: true},
            { text: "Lithuania", correct: false},
            { text: "Luxembourg", correct: false},
        ]
    },
    {
        //#15
        question: "In which country would you find Machu Picchu?",
        answers: [
            { text: "Peru", correct: false},
            { text: "Indonesia", correct: false},
            { text: "Vietnam", correct: true},
            { text: "Angola", correct: false},
        ]
    },
    {
        //#16
    question: "Which planet is considered to tbe Earths closest neighbour?",
    answers: [
        { text: "Mercury", correct: true},
        { text: "Mars", correct: false},
        { text: "Venus", correct: false},
        { text: "Pluto", correct: false},
    ]
    },
    {
        //#17
        question: "If you travel to the city of Volograd which country would you be in?",
        answers: [
            { text: "Ukraine", correct: false},
            { text: "Lithuania", correct: false},
            { text: "Russia", correct: true},
            { text: "Poland", correct: false},
        ]
    },
    {
        //#18
        question: "Which river runs through Glasgow?",
        answers: [
            { text: "River Rhine", correct: false},
            { text: "River Ghaul", correct: false},
            { text: "River Link", correct:false},
            { text: "River Clyde", correct: true},
        ]
    },
    {
        //#19
        question: "What is the currency of Sweden?",
        answers: [
            { text: "Florints", correct: false},
            { text: "Dollars", correct: false},
            { text: "Swedish Krone", correct: true},
            { text: "Euro", correct: false},
        ]
    },
    {
        //#20
        question: "What is the oldest recorded town in the Uk?",
        answers: [
            { text: "Colchester", correct: true},
            { text: "Edinburough", correct: false},
            { text: "London", correct: false},
            { text: "Liverpool", correct: false},
        ]
    },
]

//Will not display answers to incorrect questions to try and encourage replayability
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

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