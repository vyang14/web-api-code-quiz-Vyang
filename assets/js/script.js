var startBtn = document.querySelector('#startQuiz');
var submitBtn = document.querySelector('#submitForm');
var timeEl = document.querySelector('#timeRemaining');
var scoreText = document.querySelector('#score');
var bigEl = document.querySelector('#bigLine');
var smallEl = document.querySelector('#smallLine');
var bodyEl = document.querySelector('#customBody');
var enterInitials = document.getElementsByName('userName');
var userInitials = document.querySelector('#userInitials');
var btnSub = document.getElementById('submitScore');
var resultEl = document.querySelector('#result');
var answerEl = document.querySelector('answers');
var allBtns = document.getElementsByName('userBtn');
var b1 = document.querySelector('#btn1');
var b2 = document.querySelector('#btn2');
var b3 = document.querySelector('#btn3');
var b4 = document.querySelector('#btn4');
var answerBtn = document.querySelector('answerButton');
var scoreModal = document.querySelector('#scoreModal');
var viewScore = document.querySelector('#highscore');
var empty = document.getElementsByClassName('close')[0];
var initialEl = document.getElementById('nameList');
var scoreEl = document.getElementById('scoreList');
var listItem = document.createElement('li');
var storedValues = {
    names: [],
    scores: []
};


var quizQuestions = [
    {
    question: "Question 1: How do you declare a JavaScript variable?",
    answers: [
        {a: "var nameHere;", correct: true},
        {a: "v nameHere;", correct: false},
        {a: "variable = nameHere;", correct: false},
        {a: "variable nameHere;", correct: false}
    ]
  },
    {
    question: "Question 2:  Which is the correct way to open a dialog box requesting the user to enter a value for variable userEntry?",
    answers: [
        {a: "var userEntry = request('Input text')", correct: false},
        {a: "var userEntry = input('Input text')", correct: false},
        {a: "var userEntry = prompt('Input text')", correct: true},
        {a: "var userEntry = confirm('Input text')", correct: false}
    ]
  },
    {
    question: "Question 3: What is the correct way to call a function named bigFunc?",
    answers: [
        {a: "bigFunc.function()", correct: false},
        {a: "bigFunc()", correct: true},
        {a: "call bigFunc()", correct: false},
        {a: "Both B and C", correct: false}
    ]
  },
    {
    question: "Question 4: The for loop for(var i = 0; i > 5; i++) is not running. How do we fix this?",
    answers: [
        {a: "The second condition needs to be i < 5.", correct: true},
        {a: "This is casuing an infinite loop.", correct: false},
        {a: "Variable i is undefined.", correct: false},
        {a: "Change to for(var i >= 5; i++)", correct: false}
    ]
  },
    {
    question: "Question 5: Which of the following is a proper comment in JavaScript?",
    answers: [
        {a: "//Lorem ipsum dolor sit amet", correct: false},
        {a: "/*Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit*/", correct: false},
        {a: "<!--Lorem ipsum dolor sit amet-->", correct: false},
        {a: "Both A and B", correct: true}
    ]
  },
    {
    question: "Question 6: Which of the following will round the number 9.33 down? .",
    answers: [
        {a: "Math.floor(9.33)", correct: true},
        {a: "round(9.33)", correct: false},
        {a: "Math.down(9.33)", correct: false},
        {a: "Math.round.floor(9.33)", correct: false}
    ]
  },
    {
    question: "Question 7: Which is the correct way to start a WHILE loop?",
    answers: [
        {a: "while var x >= 10 ", correct: false},
        {a: "while.variable(x >= 10)", correct: false},
        {a: "while (var i <= 10; i = 10; i++)", correct: false},
        {a: "None of the above.", correct: true}
    ]
  },
    {
    question: "Question 8: Which of the following will find the larger value between variables x and y?",
    answers: [
        {a: "compare(x, y)", correct: false},
        {a: "Math.max(x, y)", correct: true},
        {a: "Math.larger(x, y)", correct: false},
        {a: "Math.compare(x, y)", correct: false}
    ]
  },
    {
    question: "Question 9: JavaScript is an updated form of...",
    answers: [
        {a: "Ruby", correct: true},
        {a: "C++", correct: false},
        {a: "Java", correct: false},
        {a: "None of the Above", correct: true}
    ]
  },
    {
    question: "Question 10: Pick the correct way to set var x to 'dolor' from myArray = ['Lorem', ipsum', 'dolor', 'sit']",
    answers: [
        {a: "var x = myArray[3];", correct: false},
        {a: "var x = myArray(2);", correct: false},
        {a: "var x = myArray[2];", correct: true},
        {a: "myArray[3](var x)", correct: false}
    ]
  }];
  
var i = 0;
var finalScore = 0;

viewScore.onclick = function() {
    scoreModal.style.display = "block";
    storedValues.names = JSON.parse(localStorage.getItem('userInitials'));
    storedValues.scores = JSON.parse(localStorage.getItem('highScores'));
    for (var scores = 0; scores < allScores.length; scores++){
        listItem.value = allScores[scores]
        scoreEl.appendChild(listItem);
    }
    for (var initials = 0; initials < allInitials.length; initials++){
        listItem.value = allInitials[initials]
        initialEl.appendChild(listItem);
    }

};

empty.onclick = function() {
    scoreModal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == scoreModal) {
        scoreModal.style.display = "none";
    }
};

function logScores (){
    console.log("Submit button pressed")
    storedValues.names = JSON.parse(localStorage.getItem('userInitials'));
    storedValues.scores = JSON.parse(localStorage.getItem('highScores'));
    if (enterInitials[1].value === ''){
        alert("Please don't leave the form blank.")
        return;
    } else {
        var finalInitials = JSON.stringify(enterInitials[1].value);
        if (storedValues.scores === null) {
            debugger;
            storedValues.scores = [finalScore];
        } else {
            debugger;
            storedValues.scores.push(finalScore);
        }
        if (storedValues.names === null) {
            storedValues.names = [finalInitials];
        } else {
            storedValues.names.push(finalInitials)
        }
    localStorage.setItem("highScores", JSON.stringify(finalScore));
    localStorage.setItem("userInitials", JSON.stringify(finalInitials));
    debugger;
    enterInitials[1].value = ' Thanks for playing! ';
    enterInitials[2].value = 'Submitted!';
    enterInitials[2].disabled=true;
    setTimeout(function(){
        enterInitials[1].value = '';
        enterInitials[2].value = 'Submit';
        enterInitials[2].disabled=false;
        enterInitials.forEach(enterInitials => enterInitials.classList.add('hide'));
        
        }, 2000);
    }
}

function highScore(finalScore) {
    console.log("highScore run");
    b1.classList.add('hide');
    b2.classList.add('hide');
    b3.classList.add('hide');
    b4.classList.add('hide');
    bodyEl.setAttribute("id", "");
    startBtn.classList.remove('hide');
    startBtn.textContent = "Restart Quiz";
    bigEl.textContent = "Game Over!"
    smallEl.textContent = "Your final score is " + finalScore;
    scoreText.textContent = finalScore;
    enterInitials.forEach(enterInitials => enterInitials.classList.remove('hide'));
    btnSub.addEventListener('click', logScores);
};

function quizFx (){
    bodyEl.removeAttribute("id");
    smallEl.textContent = " ";
    console.log('quizFx started');
    allBtns.forEach(allBtns => allBtns.disabled=false)
    bigEl.textContent = quizQuestions[i].question;
    b1.dataset.correct = (quizQuestions[i].answers[0].correct);
    b2.dataset.correct = (quizQuestions[i].answers[1].correct);
    b3.dataset.correct = (quizQuestions[i].answers[2].correct);
    b4.dataset.correct = (quizQuestions[i].answers[3].correct);
    b1.textContent = (quizQuestions[i].answers[0].a);
    b2.textContent = (quizQuestions[i].answers[1].a);
    b3.textContent = (quizQuestions[i].answers[2].a);
    b4.textContent = (quizQuestions[i].answers[3].a);
    console.log(typeof btn1);
    b1.classList.remove('hide');
    b2.classList.remove('hide');
    b3.classList.remove('hide');
    b4.classList.remove('hide');
    b1.addEventListener('click', answerSubmit);
    b2.addEventListener('click', answerSubmit);
    b3.addEventListener('click', answerSubmit);
    b4.addEventListener('click', answerSubmit);
};

function answerSubmit (){
    i+=10;
    if (this.dataset.correct === 'true') { 
        bodyEl.setAttribute("id", "greenBod");
        smallEl.textContent = 'Correct!';
        nextQuestion();
    } else {
        bodyEl.setAttribute("id", "redBod");
        timeLeft -= 10;
        timeEl.textContent = timeLeft;
        smallEl.textContent = "Incorrect!";
        nextQuestion();
    }
};

function nextQuestion(){
    allBtns.forEach(allBtns => allBtns.disabled=true)
    setTimeout(function(){
        if (i <= 9) {
            quizFx();
        } else {
            finalScore = timeLeft;
            highScore(finalScore);           
        }
    }, 2000);
};

startBtn.addEventListener("click", function(){
    timeLeft = 100;
    finalScore = 0;
    i = 0;
    scoreText.textContent = finalScore;
    timeEl.textContent = timeLeft;
    startBtn.classList.add("hide");
    console.log("Start button clicked.");
    enterInitials.forEach(enterInitials => enterInitials.classList.add('hide'));
    var timeInterval = setInterval(function(){
        if (timeLeft > 0) {
            if (i >= 10) {
                clearInterval(timeInterval);
            }
            timeLeft--;
            timeEl.textContent = timeLeft; 
        } else {
            clearInterval(timeInterval);
            timeLeft = 0;
            finalScore = timeLeft;
            timeEl.textContent = timeLeft;
            highScore(finalScore);
            }
    }, 1000);

    quizFx();
});