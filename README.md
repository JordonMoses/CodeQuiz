# Code-Quiz #



## Project Overview ##

Thgis project asked us ato create a quiz that had a timer, kept score, and allowed us to submit/save/clear those scores. This project has presented the largest challenge for me thuse far. I begin trying to think through what I would need to create in order to make this quiz function. 

I was able to get the the questions and answers to load propoerly. I created a verify function that allowed me to check the answers to see if they are correct. The timer also works when the quiz begins. The score also is tallied (logged). 

The pieces of the application that are not yet functional include: 
1. Time deduction from clock with wrong answer
2. Submissions of initials and scores
3. Clearing scores ands initials
4. Replay button


## Process ##

Began process by psuedo coding in JavaScript. 

## Screenshot ##
<img width="987" alt="CodeQuiz Screenshot" src="https://user-images.githubusercontent.com/70240665/97098159-c47dcd00-1647-11eb-8167-95483ac6a9a3.png">


## Sample Code ##
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

## Contribute ##
Changes to score and submission page/functions welcome. Ideas on time deduction on incorrect answer. 