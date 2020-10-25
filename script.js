// Selectors
let homepageContainer = document.querySelector("#homepage");
let startButton = document.querySelector("#start-quiz");
let highscore = document.querySelector("#highscore-page");

let quizContainer = document.querySelector("#quiz");
let quizTime = document.querySelector("#timer");
let questionOptions = document.querySelector("#questions");
let questionResults = document.querySelector("#unknown")

let finalPageContainer = document.querySelector("#endpage");
let userScore = document.querySelector("#score");
let submitButton = document.querySelector("#submit");

let leaderContainer = document.querySelector("#leaderboard");
let playerInitials = document.querySelector("#initials")
let playerScore = document.querySelector("#scores")
let restartQuiz = document.querySelector("#restart");
let clearLeaderboard = document.querySelector("#clear");

let buttonOne = document.querySelector("#one");
let buttonTwo = document.querySelector("#two");
let buttonThree = document.querySelector("#three");


// Questions
let questions = [
    {
        question: "Whats is the max amount of players in Among Us?",
        a: "6",
        b: "8",
        c: "10",
        correctAnswer: "10"
    },
    {
        question: "How many maps are currently available?",
        a: "5",
        b: "3",
        c: "2",
        correctAnswer: "3"
    },
    {
        question: "What year was Among Us initially released?",
        a: "2020",
        b: "2016",
        c: "2018",
        correctAnswer: "2018"
    },
    {
        question: "Who is sus?",
        a: "Orange",
        b: "Green",
        c: "Red",
        correctAnswer: "Orange"
    },
];

// Variables
let secondsLeft = 60;
let secondsInterval;
let score = 0;
let currentPage = 0;
let finalPage = questions.length;
let correct;

// Functions 
function createQuestion() {
    finalPageContainer.style.display = "none";
    if (currentPage === finalPage) {
        return showLeaderboard();
    }

    let presentQ = questions[currentPage];
    questionOptions.innerHTML = "<p>" + presentQ.question + "</p>";
    questionOptions.style.display = "block"
    buttonOne.innerHTML = presentQ.a;
    buttonTwo.innerHTML = presentQ.b;
    buttonThree.innerHTML = presentQ.c;

};

function beginQuiz() {
    leaderContainer.style.display = "none"
    homepageContainer.style.display = "none"
    createQuestion();
    quizTime.style.display = "block"

    secondsInterval = setInterval(function () {
        secondsLeft--;
        quizTime.textContent = "Time remaining: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(secondsInterval);
            showLeaderboard();
        }
    }, 1000);
    quizContainer.style.display = "block";
}

// Checking answers and questions
function verify(choice) {
    console.log(choice.target.innerText)
    correct = questions[currentPage].correctAnswer;

    if (choice.target.innerText === correct && currentPage !== finalPage) {
        questionResults.innerHTML = "Right!"
        score++;
        console.log(score)
        currentPage++;
        createQuestion();

    } else if (choice.target.innerText !== correct && currentPage !== finalPage) {
        questionResults.innerHTML = "Wrong!"
        secondsLeft - 5
        currentPage++;
        createQuestion();

    } else {
        showLeaderboard();
    }

    if (currentPage >= questions.length){
    }
}

function showLeaderboard(){
    leaderContainer.style.display = "block";
    finalPageContainer.style.display = "block";
    quizContainer.style.display = "none";
}

function submitScore() {
    playerInitials.innerHTML = "";
    playerScore.innerHTML = "";
    // let newPlayer = document.createElement("li");
}

// function playQuiz(){
//     leaderContainer.style.display = "none";
//     finalPageContainer.style.display = "none";
//     quizContainer.style.display = "block"
//     secondsLeft = 60;
//     score = 0;
//     currentPage = 0;
//   }
 
startButton.addEventListener("click", beginQuiz)
buttonOne.addEventListener("click", verify)
buttonTwo.addEventListener("click", verify)
buttonThree.addEventListener("click", verify)
submitButton.addEventListener("click", submitScore)
restartQuiz.addEventListener("click", playQuiz)

// I need to be able to clear the HTML under my answers/buttons each time a new question appears
// I need to display the questions with the buttons/answers (complete)
// I need the answers to tally up the scores
// I the need players to be able to submit their initials
// I need initials to be paired with the scores and then returned on the highscores page
// I need to be able to deduct 5 seconds each time the question in answer incorrectly. Then I need to display that change
