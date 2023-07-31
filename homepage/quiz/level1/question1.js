function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizCOntainer){
       // this is for storing the output and the answer choices
        var output = [];
        var answers;
          // for each question...
        for(var i=0; i<questions.length; i++){
            // first reset the list of answers
            answers = [];

            // for each available answer to this question...
            for(word in questions[i].answers){
              
                // this will add an html radio button
              answers.push(
                '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
              );
          }
         
          // This adds question and its answers to the output
          output.push(
            '<div class="question"' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
          );
        }
         // this combines our output list into one string of html and puts it on the page.
        quizContainer.innerHTML = output.join('');
    }
    
    function showResults(questions, quizContainer, resultsContainer){
       
        // gathers answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');

        // keep tract of user's answers
        var userAnswer = '';
        var numCorrect = 0;

        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer('||' operator is added to prevent quiz from breaking if USER does not complete question)
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checkled')||{}).value;

            //if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }
        
        // show num,ber of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    showQuestions(questions, quizContainer);
    // on submit, show results
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

var quizContainer = document.getElementsByClassName('question');
var resultsContainer = document.getElementByClassName('answers');

generateQuiz(myQuestions, quizContainer, resultsContainer, submit);