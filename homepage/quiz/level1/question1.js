// const variables for quiz elements 
const startButton = document.getElementById('start-btn'); // returns an 'start-btn' id from HTML file.
const nextButton = document.getElementById('next-btn'); // returns an 'next-btn' id from HTML file.
const questionContainerElement = document.getElementById('question-container'); // returns an 'question-container' id from HTML file.
const questionElement = document.getElementById('question'); // returns  an 'question' id from HTML file.
const answerButtonsElement = document.getElementById
('answer-buttons'); // returms an 'answer-buttons' id from HTML file.

let currentQuestionIndex;

startButton.addEventListener('click', startGame) // When we click on startButton, it cues the code that's inside start

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started') // to check if the 'Start' button is being called when clicked.
    startButton.classList.add('hide') // to hide the start button
    questionContainerElement.classList.remove('hide') // this causes the 'question-container' to show
}

function setNextQuestion() {

}

function showQuestion() {

}

function resetState() {

}

function selectAnswer() {

}

function setStatusClass() {

}

function clearStatusClass() {
    
}
