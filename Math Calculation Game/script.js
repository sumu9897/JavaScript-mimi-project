var correctAnswers = 0;
var incorrectAnswers = 0;
var skippedAnswers = 0;

function generateProblem() {
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    var operator = ['+', '-'][Math.floor(Math.random() * 2)];
    
    var problem = num1 + ' ' + operator + ' ' + num2;
    document.getElementById('problem').innerText = problem;
    document.getElementById('answer').value = '';
    document.getElementById('result').innerText = '';
}

function checkAnswer() {
    var userAnswer = eval(document.getElementById('problem').innerText);
    var enteredAnswer = parseFloat(document.getElementById('answer').value);

    if (isNaN(enteredAnswer)) {
        document.getElementById('result').innerText = 'Skipped. Next problem!';
        document.getElementById('result').className = 'skipped';
        skippedAnswers++;
    } else if (userAnswer === enteredAnswer) {
        document.getElementById('result').innerText = 'Correct!';
        document.getElementById('result').className = 'correct';
        correctAnswers++;
    } else {
        document.getElementById('result').innerText = 'Incorrect. Try again.';
        document.getElementById('result').className = 'incorrect';
        incorrectAnswers++;
    }
}

function displayFinalResult() {
    document.getElementById('result').innerText = 'Game Over!\nCorrect Answers: ' + correctAnswers + '\nIncorrect Answers: ' + incorrectAnswers + '\nSkipped Answers: ' + skippedAnswers;
    document.getElementById('result').className = ''; // Remove color styling
}

generateProblem();
