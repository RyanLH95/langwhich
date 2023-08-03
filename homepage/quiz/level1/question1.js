// const variables for quiz elements 
const startButton = document.getElementById('start-btn'); // returns an 'start-btn' id from HTML file.
const nextButton = document.getElementById('next-btn'); // returns an 'next-btn' id from HTML file.
const questionContainerElement = document.getElementById
('question-container'); // returns an 'question-container' id from HTML file.
const questionElement = document.getElementById('question'); // returns  an 'question' id from HTML file.
const answerButtonsElement = document.getElementById
('answer-buttons'); // returms an 'answer-buttons' id from HTML file.

let currentQuestionIndex;

startButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})