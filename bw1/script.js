const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let currentIndex = 0;

const questionContainer = document.querySelector(".title");
const buttonContainer = document.querySelector(".container-button");

function populateQuestion(currentQuestion) {
  questionContainer.innerHTML = "";
  buttonContainer.innerHTML = "";

  const question = document.createElement("h1");
  question.innerText = currentQuestion.question;
  questionContainer.appendChild(question);

  // Mescolare le risposte per evitare che la risposta corretta sia sempre la prima
  const answers = [...currentQuestion.incorrect_answers];
  answers.splice(Math.floor(Math.random() * (answers.length + 1)), 0, currentQuestion.correct_answer);

  // Crea e aggiunge i pulsanti per tutte le risposte mescolate
  answers.forEach(answer => {
    const button = document.createElement("button");
    button.setAttribute("class", "answer-btn");
    button.innerText = answer;
    buttonContainer.appendChild(button);
  });

    // Aggiungiamo un attributo chiamato "dataCorrect" per indicare se la risposta è corretta
    if (answer === currentQuestion.correct_answer) {
      button.setAttribute("dataCorrect", "true");
      let dataCorrect =  true;
    }

    button.addEventListener("click", (e) => {
      // Controlla se il pulsante cliccato è la risposta corretta
      if (e.target.getAttribute("data-correct") === "true") {
        alert("Risposta corretta!");
      } else {
        alert("Risposta sbagliata!");
      }

      // Verifichiamo se ci sono ancora domande
      if (currentIndex < questions.length - 1) {
        currentIndex++;
        populateQuestion(questions[currentIndex]);
      } else {
        questionContainer.innerHTML = "Quiz finished!";
        buttonContainer.innerHTML = "";
      }
    });
    buttonContainer.appendChild(button);
  };


populateQuestion(questions[currentIndex]);