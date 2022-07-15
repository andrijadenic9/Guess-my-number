'use strict';
let inputNumber = document.querySelector('.guess');
let checkBtn = document.querySelector('.check');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let playAgain = document.querySelector('.again');
let number = document.querySelector('.number');
let message = document.querySelector('.message');
let headerBG = document.querySelector('header');
let mainBG = document.querySelector('main');

// * initial settings
let startScore = 20;
let selectedNumber;
let userSelectedNumber;
message.innerHTML = 'Start guessing &#128512;';
score.innerHTML = startScore;
inputNumber.focus();

// * get selected number
selectedNumber = Math.ceil(Math.random() * 20);

// * if the user came back to the game, show him the highest score from before
if (localStorage.goal) {
    highScore.innerHTML = localStorage.goal;
}

// * event listeners
checkBtn.addEventListener('click', checkNumber);
inputNumber.addEventListener('keypress', checkNumber);
playAgain.addEventListener('click', startAgain);



function checkNumber(e) {

    // * allow verification by clicking enter or by simple clicking
    if (e.keyCode === 13 || e.type === "click") {

        // * make the user number a number not a string
        userSelectedNumber = parseInt(inputNumber.value);

        // * if the user guesses the selected number
        if (userSelectedNumber === selectedNumber) {
            checkBtn.removeEventListener('click', checkNumber);
            inputNumber.removeEventListener('keypress', checkNumber);
            headerBG.style.background = '#178a17';
            mainBG.style.background = '#178a17';
            number.innerHTML = selectedNumber;
            message.style.color = '#fff';
            message.innerHTML = 'Congratulations!';
            localStorage.goal = startScore;
            highScore.innerHTML < startScore ? highScore.innerHTML = startScore : null;

            // * if the user does not guess the selected number, the score decrease
        } else {
            startScore--;
            score.innerHTML = startScore;

            // * check if the user's number is greater than the selected one
            if (userSelectedNumber > selectedNumber) {

                // * if the user's number is 1 higher than the selected number, display the appropriate message
                if (userSelectedNumber - 1 === selectedNumber) {
                    message.innerHTML = 'So close!';
                    message.style.color = '#178a17';

                    // * if the user's number is greater than the selected number, display the appropriate message
                } else {
                    message.innerHTML = 'Try a smaller number';
                    message.style.color = '#fff';
                }

                // * if the user's number is less than the selected one
            } else {

                // * if the user's number is 1 less than the selected one, display the appropriate message
                if (userSelectedNumber + 1 === selectedNumber) {
                    message.innerHTML = 'Almost there, add the minimum number!';
                    message.style.color = '#178a17';

                    // * if the user's number is less than the selected number, display the appropriate message
                } else {
                    message.innerHTML = 'Try a higher number';
                    message.style.color = '#fff';
                }
            }
        }
    }
}

// * settings to restart the game
function startAgain() {
    checkBtn.addEventListener('click', checkNumber);
    inputNumber.addEventListener('keypress', checkNumber);
    inputNumber.value = '';
    startScore = 20;
    inputNumber.focus();
    headerBG.style.background = '#222';
    mainBG.style.background = '#222';
    message.innerHTML = 'Start guessing &#128512;';
    message.style.color = '#fff';
    number.innerHTML = '?';
    score.innerHTML = startScore;
    selectedNumber = Math.ceil(Math.random() * 20);
}