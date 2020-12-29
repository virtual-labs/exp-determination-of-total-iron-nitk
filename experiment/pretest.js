
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
      question: "Colorimetric analysis is based on the change in the intensity of the __________________ of solution with variations in concentrations. ",
      answers: {
        a: "Temperature",
        b: "Light",
        c: "Colour",
        d: "All of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "Colorimetric methods represent the simplest form of ____________ analysis. ",
      answers: {
        a: "Decomposition",
        b: "Absorption",
        c: "Adsorption",
        d: "Degradation"
      },
      correctAnswer: "b"
    },
    {
      question: "Amount of light absorbed depends upon ",
      answers: {
        a: "The concentration of solution",
        b: "The path length of light",
        c: "The wavelength of light",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
    {
        question: "Iron is in ________ oxidation state during reaction. ",
        answers: {
          a: "+2",
          b: "+3",
          c: "+4",
          d: "0"
        },
        correctAnswer: "a"
      },
    {
        question: "Iron+II reacts with __________ to form an orange-red complex ion. ",
    answers: {
          a: "M-phenanthroline",
          b: "O-phenanthroline",
          c: "Both",
          d: "None of the above"
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
