//Used to have a dymanic nav sidebar for smaller screens
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

//Aim is to have 20 multiple choice questions per quiz for the webpage.
//using objects and boolean values

const questions =[
    {
        //#1
            question: "Which team won the first Premier League title?",
        answers: [
            { text: "Liverpool", correct: false},
            { text: "Arsenal", correct: false},
            { text: "Manchester United", correct: true},
            { text: "Chelsea", correct: false},
        ]
    },
    {
        //#2
        question: "Which Premier League player has made the most appearances?",
        answers: [
            { text: "Alan Shearer", correct: false},
            { text: "Ryan Giggs", correct: false},
            { text: "Rio Ferdinand", correct: false},
            { text: "Gareth Barry", correct: true},
        ]
    },
    {
        //#3
        question: "When was the inaugral Premier League season?",
        answers: [
            { text: "1932-33", correct: false},
            { text: "1942-43", correct: false},
            { text: "1982-83", correct: false},
            { text: "1992-93", correct: true},
        ]
    },
    {
        //#4
        question: "Which country won the first ever World Cup in 1930?",
        answers: [
            { text: "Spain", correct: false},
            { text: "Uruguay", correct: true},
            { text: "Brazil", correct: false},
            { text: "France", correct: false},
        ]
    },
    {
        //#5
    question: "Which country has appeared in 3 THREE world cup finals, but has never won the competition?",
    answers: [
        { text: "England", correct: false},
        { text: "Italy", correct: false},
        { text: "Netherlands", correct: true},
        { text: "Croatia", correct: false},
    ]
    },
    {
        //#6
        question: "Which Swedish player once had a clause inserted into his Premier League contract that prohibited him from travelling into space?",
        answers: [
            { text: "Stefan Schwarz", correct: true},
            { text: "Henrik Larsson", correct: false},
            { text: "Zlatan Ibrahimovic", correct: false},
            { text: "Anders Svensson", correct: false},
        ]
    },
    {
        //#7
        question: "Which Balon D'or winner had a galaxy named after them in 2015?",
        answers: [
            { text: "Lionel Messi", correct: false},
            { text: "Luka Modric", correct: false},
            { text: "Karim Benzema", correct: false},
            { text: "Cristiano Ronaldo", correct: true},
        ]
    },
    {
        //#8
        question: "Which club has won the most Champions League titles?",
        answers: [
            { text: "A.C Milan", correct: false},
            { text: "Bayern Munich", correct: false},
            { text: "Liverpool", correct: false},
            { text: "Real Madrid", correct: true},
        ]
    },
    {
        //#9
        question: "Which outfield player played in the Champions League in three different decades?",
        answers: [
            { text: "Ryan Giggs", correct: true},
            { text: "Franck Ribery", correct: false},
            { text: "Philippe Inzaghi", correct: false},
            { text: "Thomas Muller", correct: false},
        ]
    },
    {
        //#10
        question: "In which year was the first European Championship held?",
        answers: [
            { text: "1930", correct: false},
            { text: "1940", correct: false},
            { text: "1950", correct: false},
            { text: "1960", correct: true},
        ]
    },
    {
        //#11
        question: "In which year did the European Championship expand from 16 teams to 24 teams?",
        answers: [
            { text: "2010", correct: false},
            { text: "2006", correct: false},
            { text: "2020", correct: false},
            { text: "2016", correct: true},
        ]
    },
    {
        //#12
        question: "With 365 goals who holds the record for top Bundesliga goalscorer?",
        answers: [
            { text: "Robert Lewandowski", correct: false},
            { text: "Gerd Muller", correct: true},
            { text: "Marco Reus", correct: false},
            { text: "Miroslav Klose", correct: false},
        ]
    },
    {
        //#13
        question: "What is the nickname of Borussia Monchengladbach?",
        answers: [
            { text: "Die Roten", correct: false},
            { text: "Breisgau-Brasilianer", correct: false},
            { text: "Die Fohlen", correct: true},
            { text: "Die Schwarzgelben", correct: false},
        ]
    },
    {
        //#14
        question: "Which player scored the fastest hat-trick in Premier League history?",
        answers: [
            { text: "Wayne Rooney", correct: false},
            { text: "Sadio Mane", correct: true},
            { text: "Thierry Henry", correct: false},
            { text: "Harry Kane", correct: false},
        ]
    },
    {
        //#15
        question: "Manchester Unioted famously wear red, but what colours did they wear berfore this?",
        answers: [
            { text: "Green and Gold", correct: true},
            { text: "Yellow and Black", correct: false},
            { text: "Blue and White", correct: false},
            { text: "White and Grey", correct: false},
        ]
    },
    {
        //#16
    question: "Which former England internationals reached No. 12 in the UK singles with 1987 song 'Diamond Lights'?",
    answers: [
        { text: "Chris Waddle and Glenn Hoddle", correct: true},
        { text: "John Terry and Wayne Bridge", correct: false},
        { text: "Peter Crouch and Michael Owen", correct: false},
        { text: "Paul Gascoigne and Gary Lineker ", correct: false},
    ]
    },
    {
        //#17
        question: "Which club is often referred to as FC Hollywood?",
        answers: [
            { text: "Chelsea", correct: false},
            { text: "Real Madrid", correct: false},
            { text: "Barcelona", correct: false},
            { text: "Bayern Munich", correct: true},
        ]
    },
    {
        //#18
        question: "In which World Cup did Maradonna score his infamous 'Hand Of God' goal?",
        answers: [
            { text: "1966 (England)", correct: false},
            { text: "1986 (Mexico)", correct: true},
            { text: "1978 (Argentina)", correct: false},
            { text: "1990 (Italy)", correct: false},
        ]
    },
    {
        //#19
        question: "English pop star Elton John was twice the owner of which football club?",
        answers: [
            { text: "Brighton", correct: false},
            { text: "Crystal Palace", correct: false},
            { text: "Watford", correct: true},
            { text: "Nottingham Forest", correct: false},
        ]
    },
    {
        //#20
        question: "Rangers tried to sign which superstar after Alex McLeish was alerted to his ability through the game Football Manager?",
        answers: [
            { text: "Lionel Messi", correct: true},
            { text: "Cristiano Ronaldo", correct: false},
            { text: "Neymar Junior", correct: false},
            { text: "Paul Pogba", correct: false},
        ]
    },
]

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