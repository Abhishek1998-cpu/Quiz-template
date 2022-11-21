const questionsDB = [
  {
    id: 1,
    question: "How to delete a directory in Linux?",
    description: "delete folder",
    answers: {
      answer_a: "ls",
      answer_b: "delete",
      answer_c: "remove",
      answer_d: "rmdir",
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "true",
    },
    explanation: "rmdir deletes an empty directory",
    tip: null,
    tags: [],
    category: "linux",
    difficulty: "Easy",
  },
  {
    id: 2,
    question:
      "Which of the following command is used to count the total number of lines, words, and characters contained in a file?",
    description: "delete folder",
    answers: {
      answer_a: "wc",
      answer_b: "wcount",
      answer_c: "countw",
      answer_d: "None of the above",
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
    },
    explanation: "rmdir deletes an empty directory",
    tip: null,
    tags: [],
    category: "linux",
    difficulty: "Easy",
  },
  {
    id: 3,
    question:
      "Identify the hardware structure which is not supported by Red Hat?",
    description: "delete folder",
    answers: {
      answer_a: "IBM-compatible",
      answer_b: "Alpha",
      answer_c: "SPARC",
      answer_d: "Macintosh",
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "true",
    },
    explanation: "rmdir deletes an empty directory",
    tip: null,
    tags: [],
    category: "linux",
    difficulty: "Easy",
  },
  {
    id: 1,
    question:
      "Among the following command which is used with vi editors to delete a single character?",
    description: "delete folder",
    answers: {
      answer_a: "a",
      answer_b: "x",
      answer_c: "y",
      answer_d: "z",
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
    },
    explanation: "rmdir deletes an empty directory",
    tip: null,
    tags: [],
    category: "linux",
    difficulty: "Easy",
  },
  {
    id: 1,
    question:
      "Choose the TCP/IP Protocol which is used for remote terminal connection service?",
    description: "delete folder",
    answers: {
      answer_a: "FTP",
      answer_b: "UDP",
      answer_c: "RARP",
      answer_d: "TELNET",
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "true",
    },
    explanation: "rmdir deletes an empty directory",
    tip: null,
    tags: [],
    category: "linux",
    difficulty: "Easy",
  },
];

const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const currentQuestionNumber = document.getElementById("currentQuestionNumber");
const totalQuestionNumber = document.getElementById("totalQuestionNumber");
const showScore = document.getElementById("showScore");
let questionCount = 0;
let score = 0;

const updateIndex = () => {
  if (questionCount < questionsDB.length) {
    currentQuestionNumber.innerText = questionCount + 1;
    totalQuestionNumber.innerText = questionsDB.length;
  } else {
    showResult();
    console.log(`Game Over, Your score is ${score}`);
  }
};

const startAgain = () => {
  questionCount = 0;
  score = 0;
  window.location.reload();
};

const showResult = () => {
  showScore.innerHTML = `
  <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
  <p class="fs-2">Game Over</p>
  <p class="fs-3">Your score is: ${score}</p>
  <button
  type="button"
  class="btn btn-primary buttonStyle"
  onclick="startAgain()"
  >Start again</button>
  </div>
  `;
};

const loadQuestion = () => {
  console.log("I am called");
  if (questionCount < questionsDB.length) {
    question.innerText = questionsDB[questionCount].question;
    option1.innerText = questionsDB[questionCount].answers.answer_a;
    option2.innerText = questionsDB[questionCount].answers.answer_b;
    option3.innerText = questionsDB[questionCount].answers.answer_c;
    option4.innerText = questionsDB[questionCount].answers.answer_d;
  } else {
    showResult();
    console.log(`Game Over, Your score is ${score}`);
  }
  updateIndex();
};

const showAnswer = () => {
  if (questionsDB[questionCount]?.correct_answers?.answer_a_correct == "true") {
    option1.style.backgroundColor = "green";
    option2.style.backgroundColor = "red";
    option3.style.backgroundColor = "red";
    option4.style.backgroundColor = "red";
    setTimeout(() => {
      option1.style.backgroundColor = "#20213f";
      option2.style.backgroundColor = "#20213f";
      option3.style.backgroundColor = "#20213f";
      option4.style.backgroundColor = "#20213f";
    }, 2000);
  }
  if (questionsDB[questionCount].correct_answers.answer_b_correct == "true") {
    option1.style.backgroundColor = "red";
    option2.style.backgroundColor = "green";
    option3.style.backgroundColor = "red";
    option4.style.backgroundColor = "red";
    setTimeout(() => {
      option1.style.backgroundColor = "#20213f";
      option2.style.backgroundColor = "#20213f";
      option3.style.backgroundColor = "#20213f";
      option4.style.backgroundColor = "#20213f";
    }, 2000);
  }
  if (questionsDB[questionCount].correct_answers.answer_c_correct == "true") {
    option1.style.backgroundColor = "red";
    option2.style.backgroundColor = "red";
    option3.style.backgroundColor = "green";
    option4.style.backgroundColor = "red";
    setTimeout(() => {
      option1.style.backgroundColor = "#20213f";
      option2.style.backgroundColor = "#20213f";
      option3.style.backgroundColor = "#20213f";
      option4.style.backgroundColor = "#20213f";
    }, 2000);
  }
  if (questionsDB[questionCount].correct_answers.answer_d_correct == "true") {
    option1.style.backgroundColor = "red";
    option2.style.backgroundColor = "red";
    option3.style.backgroundColor = "red";
    option4.style.backgroundColor = "green";
    setTimeout(() => {
      option1.style.backgroundColor = "#20213f";
      option2.style.backgroundColor = "#20213f";
      option3.style.backgroundColor = "#20213f";
      option4.style.backgroundColor = "#20213f";
    }, 2000);
  }
};

option1.addEventListener("click", (e) => {
  console.log("Option 1 is clicked");
  if (questionsDB[questionCount]?.correct_answers?.answer_a_correct == "true") {
    score = score + 1;
  }
  showAnswer();
  setTimeout(() => {
    if (questionCount < questionsDB.length) {
      questionCount = questionCount + 1;
      loadQuestion();
    } else {
      showResult();
      console.log(`Game Over, Your score is ${score}`);
    }
  }, 2000);
});

option2.addEventListener("click", (e) => {
  if (questionsDB[questionCount]?.correct_answers?.answer_b_correct == "true") {
    score = score + 1;
  }
  showAnswer();
  setTimeout(() => {
    if (questionCount < questionsDB.length) {
      questionCount = questionCount + 1;
      loadQuestion();
    } else {
      showResult();
      console.log(`Game Over, Your score is ${score}`);
    }
  }, 2000);
});

option3.addEventListener("click", (e) => {
  if (questionsDB[questionCount]?.correct_answers?.answer_c_correct == "true") {
    score = score + 1;
  }
  showAnswer();
  setTimeout(() => {
    if (questionCount < questionsDB.length) {
      questionCount = questionCount + 1;
      loadQuestion();
    } else {
      showResult();
      console.log(`Game Over, Your score is ${score}`);
    }
  }, 2000);
});

option4.addEventListener("click", (e) => {
  if (questionsDB[questionCount]?.correct_answers?.answer_d_correct == "true") {
    score = score + 1;
  }
  showAnswer();
  setTimeout(() => {
    if (questionCount < questionsDB.length) {
      questionCount = questionCount + 1;
      loadQuestion();
    } else {
      showResult();
      console.log(`Game Over, Your score is ${score}`);
    }
  }, 2000);
});

loadQuestion();

// setInterval(() => {
//   console.log("Score = " + score);
// }, 1000);
// console.log("Score = " + score);

// 28
