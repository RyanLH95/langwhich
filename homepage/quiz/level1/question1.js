// const variables for quiz elements 
const startButton = document.getElementById('start-btn'); // returns an 'start-btn' id from HTML file.
const nextButton = document.getElementById('next-btn'); // returns an 'next-btn' id from HTML file.
const questionContainerElement = document.getElementById
('question-container'); // returns an 'question-container' id from HTML file.
const questionElement = document.getElementById('question'); // returns  an 'question' id from HTML file.
const answerButtonsElement = document.getElementById
('answer-buttons'); // returns an 'answer-buttons' id from HTML file.

let shuffledQuestions, currentQuestionIndex; // to shuffle the question order and to know which question the user is currently on

startButton.addEventListener('click', startGame) // When we click on startButton, it cues the code that's inside start

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started') // to check if the 'Start' button is being called when clicked.
    startButton.classList.add('hide') // to hide the start button
    shuffledQuestions = questions.sort(() => Math.random() - .5) // this method will help give a random array during the quiz.
    currentQuestionIndex = 0 // This is for starting on the first questions with array
    questionContainerElement.classList.remove('hide') // this causes the 'question-container' to show
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        (answerButtonsElement.appendChild(button))
    })
}

function resetState() {

}

function selectAnswer() {

}

function setStatusClass() {

}

function clearStatusClass() {
    
}

const questions = [
    {
        question: `How do you say "Hello" in French?`,
        answers: [
            { text: `Bonjour!`, correct: true },
            { text: `Au revoir!`, correct: false },
            { text: `Quoi!`, correct: false },
            { text: `Arrêt!`, correct: false }
        ]
    },
    {
        question: `How do you say "How are you" in French`,
        answers: [
            { text: `Qui es-tu`, correct: false },
            { text: `Que fais-tu`, correct: false },
            { text: `Comment allez-vous`, correct: true },
            { text: `Où vas-tu`, correct: false }
        ]
    },
    {
        question: `Pick the most accurate repsonse to this question: "Salut comment tu t'appelles?"`,
        answers: [
            { text: `Je m'appelle`, correct: true },
            { text: `Je vis dans`, correct: false },
            { text: `C'est bon`, correct: false },
            { text: `Me connaissez-vous`, correct: false }
        ]
    },
    {
        question: `Pick the correct translation for this sentence: "May I have some water, Please?"`,
        answers: [
            { text: `Donne moi de l'eau`, correct: false },
            { text: `Oui je voudrais de l'eau`, correct: false },
            { text: `Puis-je avoir de l'eau s'il vous plaît`, correct: true },
            { text: `je veux de l'eau maintenant`, correct: false }
        ]
    },
    {
        question: `In this sentence: "Je m'appelle Jamie et j'habite à Paris", what does "j'habite" mean?`,
        answers: [
            { text: `We live`, correct: false },
            { text: `I live`, correct: true },
            { text: `I like`, correct: false },
            { text: `I want`, correct: false }
        ]
    }
]