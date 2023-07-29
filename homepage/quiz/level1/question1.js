function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizCOntainer){
    
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){
            // first reset the list of answers
            answers = [];

            // for each available answer to this question...
            for(word in questions[i].answers){
              
                // ...add an html radio button
              answers.push(
                '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
              );
          }
         
          // add this question and its answers to the output
          output.push(
            '<div class="question"' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
          );
        }
         // this combines our output list into one string of html and puts it on the page.
        quizContainer.innerHTML = output.join('');
    }
    
    function showResults(questions, quizContainer, resultsContainer){

    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}

var myQuestions = [
    {
        question: "How do you say 'Hello' in french?",
        answers: {
            a: "Bonjour!",
            b: "Oui!",
            c: "Arrêt",
            d: "S'il te plaît",
        },
        correctAnswer: "Bonjour!"
    }
]
