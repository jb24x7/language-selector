function hideResult() {
  document.getElementById("js").setAttribute("class", "hidden");
  document.getElementById("c#").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
}


let myQuestions = [
  {
    question: "Do you think JavaScript sounds cool?",
    answers: {
      Yes: '',
      No: '',
    },
    correctAnswer: 'Yes'
  },
  {
    question: "Who would win in a fight a grizzly bear or a lion?",
    answers: {
      GrizzlyBear: '',
      Lion: '',

    },
    correctAnswer: 'GrizzlyBear'
  },

  {
    question: "Python is a cool name for a language?",
    answers: {
      Yes: '',
      No: '',
    },
    correctAnswer: 'Yes'
  },

  {
    question: "Do you thing C# will be easy to learn?",
    answers: {
      Yes: '',
      No: '',

    },
    correctAnswer: 'Yes'
  },

  {
    question: "Which do you like more cats or dogs?",
    answers: {
      Dogs: '',
      Cats: '',

    },
    correctAnswer: 'Dogs'
  },

  {
    question: "Is Ruby a coding language and a gem?",
    answers: {
      Yes: '',
      No: '',

    },
    correctAnswer: 'Yes'
  },

  {
    question: "Waffles or pancakes?",
    answers: {
      Waffles: '',
      Pancakes: '',

    },
    correctAnswer: 'Waffles'
  },
];

let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  hideResult();

  function showQuestions(questions, quizContainer){

    let output = [];
    let answers;

    for(let i=0; i<questions.length; i++){
      
      answers = [];

      for(letter in questions[i].answers){

        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    
    let answerContainers = quizContainer.querySelectorAll('.answers');
    

    let userAnswer = '';
    let numCorrect = 0;
    
    for(let i=0; i<questions.length; i++){

      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      if(userAnswer===questions[i].correctAnswer){
        numCorrect++;

      }

    }

    if(numCorrect >= 6 ){
      document.getElementById("js").removeAttribute("class");
    } else if (numCorrect >= 4 & numCorrect <= 5) {
      document.getElementById("c#").removeAttribute("class");
    } else if (numCorrect <= 3 && numCorrect >= 2){
      document.getElementById("python").removeAttribute("class");
    } else if (numCorrect <= 1){
      document.getElementById("ruby").removeAttribute("class");
    }
  }

  showQuestions(questions, quizContainer);
  
  submitButton.onclick = function(){
    hideResult();
    showResults(questions, quizContainer, resultsContainer);
  }

}