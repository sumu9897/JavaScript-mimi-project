// Variables to track correct and incorrect answers
var correctAnswers = 0;
var incorrectAnswers = 0;

// Generate random math problem
function generateProblem() {
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    var operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
    
    var problem = num1 + ' ' + operator + ' ' + num2;
    document.getElementById('problem').innerText = problem;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
}

// Check user's answer
function checkAnswer() {
    var userAnswer = eval(document.getElementById('problem').innerText);
    var enteredAnswer = parseFloat(document.getElementById('answer').value);

    if (userAnswer === enteredAnswer) {
        document.getElementById('result').innerText = 'Correct!';
        correctAnswers++;
    } else {
        document.getElementById('result').innerText = 'Incorrect. Try again.';
        incorrectAnswers++;
    }
}

// Display final result
function displayFinalResult() {
    document.getElementById('result').innerText = 'Game Over!\nCorrect Answers: ' + correctAnswers + '\nIncorrect Answers: ' + incorrectAnswers;
}

// Initial problem generation
generateProblem();
