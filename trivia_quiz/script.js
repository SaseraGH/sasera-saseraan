const questions = [
  {
    question: "Apa ibukota Indonesia?",
    answers: ["Jakarta", "Bandung", "Surabaya", "Medan"],
    correct: 0
  },
  {
    question: "Siapa penemu telepon?",
    answers: ["Alexander Graham Bell", "Nikola Tesla", "Thomas Edison", "Marie Curie"],
    correct: 0
  },
  {
    question: "Apa mata uang Jepang?",
    answers: ["Yen", "Ringgit", "Rupee", "Won"],
    correct: 0
  },
  {
    question: "Siapa presiden pertama Indonesia?",
    answers: ["Soekarno", "Soeharto", "BJ Habibie", "Joko Widodo"],
    correct: 0
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const answersContainer = document.getElementById('answers');
const nextButton = document.getElementById('next-button');
const resultSection = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
const retryButton = document.getElementById('retry-button');

function loadQuestion() {
  const questionData = questions[currentQuestionIndex];
  document.getElementById('question').textContent = questionData.question;

  answersContainer.innerHTML = '';
  questionData.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.classList.add('answer-button');
    button.onclick = () => checkAnswer(index);
    answersContainer.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const questionData = questions[currentQuestionIndex];
  const buttons = document.querySelectorAll('.answer-button');
  
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === selectedIndex && index === questionData.correct) {
      button.classList.add('correct');
    } else if (index === selectedIndex && index !== questionData.correct) {
      button.classList.add('incorrect');
    }
  });

  if (selectedIndex === questionData.correct) {
    score++;
  }

  nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    nextButton.style.display = 'none';
  } else {
    showResult();
  }
});

function showResult() {
  questionContainer.style.display = 'none';
  nextButton.style.display = 'none';
  resultSection.style.display = 'block';
  scoreDisplay.textContent = `Skor Anda: ${score} dari ${questions.length}`;
}

retryButton.addEventListener('click', () => {
  currentQuestionIndex = 0;
  score = 0;
  resultSection.style.display = 'none';
  questionContainer.style.display = 'block';
  loadQuestion();
  nextButton.style.display = 'none';
});

loadQuestion();