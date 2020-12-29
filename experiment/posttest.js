
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "The colour of the complex formed after reaction of iron+II with o-phenanthroline is",
      answers: {
        a: "Orange-red",
        b: "Pink",
        c: "Blue-green",
        d: "Purple"
      },
      correctAnswer: "a"
    },

    {
      question: "Wavelength used in Colorimetric Determination of iron Content",
      answers: {
        a: "310nm",
        b: "410nm",
        c: "510nm",
        d: "600nm"
      },
      correctAnswer: "c"
    },

    {
      question: "Desirable limit of iron in water ",
      answers: {
        a: "0.1mg/l",
        b: "0.2mg/l",
        c: "0.3mg/l",
        d: "0.4mg/l"
      },
      correctAnswer: "c"
    },
    {
      question: "Ferric iron combines with thiocyanate ions to form a _______ coloured ferric thiocyanate. ",
      answers: {
        a: "Orange",
        b: "Green",
        c: "Blue",
        d: "Red"
      },
      correctAnswer: "d"
    },
    {
      question: "Deficiency of Iron in body leads to ",
      answers: {
        a: "Thyroid",
        b: "Anemia",
        c: "Pellagra",
        d: "Osteoporosis"
      },
      correctAnswer: "b"
    }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
