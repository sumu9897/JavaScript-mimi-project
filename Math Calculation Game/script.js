var correctAnswers = 0;
var incorrectAnswers = 0;
var skippedAnswers = 0;
var userName = "";

function startGame() {
    userName = document.getElementById('userName').value;
    if (userName.trim() === "") {
        alert("Please enter your name to start the game.");
        return;
    }

    document.getElementById('nameContainer').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
    document.getElementById('userNameDisplay').innerText = "Hello, " + userName + "!";
    generateProblem();
}

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
        moveToNextProblem();
    } else if (userAnswer === enteredAnswer) {
        document.getElementById('result').innerText = 'Correct!';
        document.getElementById('result').className = 'correct';
        correctAnswers++;
        moveToNextProblem();
    } else {
        document.getElementById('result').innerText = 'Incorrect. Try again.';
        document.getElementById('result').className = 'incorrect';
        incorrectAnswers++;
    }

    document.getElementById('answer').value = ''; // Clear the input field after checking the answer
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
}

function displayFinalResult() {
    var totalAnswers = correctAnswers + incorrectAnswers + skippedAnswers;

    if (totalAnswers > 1) {
        alert(userName + "'s Final Result:\nCorrect Answers: " + correctAnswers +
            '\nIncorrect Answers: ' + incorrectAnswers + '\nSkipped Answers: ' + skippedAnswers);
    } else if (totalAnswers === 1) {
        alert(userName + "'s Final Result:\nCorrect Answer: " + correctAnswers +
            '\nIncorrect Answer: ' + incorrectAnswers + '\nSkipped Answer: ' + skippedAnswers);
    } else {
        alert(userName + "'s Final Result:\nNo answers provided.");
    }

    resetGame();
}

function resetGame() {
    correctAnswers = 0;
    incorrectAnswers = 0;
    skippedAnswers = 0;
    userName = "";
    document.getElementById('nameContainer').style.display = 'block';
    document.getElementById('gameContainer').style.display = 'none';
    document.getElementById('userName').value = '';
    document.getElementById('userNameDisplay').innerText = '';
}

function moveToNextProblem() {
    setTimeout(generateProblem, 3000); // Move to the next problem after 3 seconds
}

// Adding event listener to the input field for Enter key
document.getElementById('answer').addEventListener('keyup', handleKeyPress);
// Ask the user if they want to play the game after 10 seconds
setTimeout(function() {
    if (!userName && confirm("Do you want to play the game?")) {
        startGame();
    }
}, 10000);
