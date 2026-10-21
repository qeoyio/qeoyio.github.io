def binary_code():
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Boolean Battle</title>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Arial, sans-serif;
      color: white;
      background: linear-gradient(135deg, #10172a, #253b65);
      padding: 20px;
    }

    .game {
      width: 100%;
      max-width: 550px;
      padding: 30px;
      background: #17233d;
      border: 1px solid #405579;
      border-radius: 20px;
      text-align: center;
      box-shadow: 0 15px 45px #0005;
    }

    h1 {
      margin-bottom: 5px;
      color: #65e6c2;
      font-size: 32px;
    }

    .subtitle {
      color: #b5c3dc;
      margin-bottom: 25px;
    }

    .stats {
      display: flex;
      justify-content: space-around;
      gap: 10px;
      margin-bottom: 25px;
    }

    .stat {
      background: #243553;
      border-radius: 12px;
      padding: 12px;
      flex: 1;
    }

    .stat span {
      display: block;
      font-size: 22px;
      font-weight: bold;
      margin-top: 5px;
      color: #65e6c2;
    }

    .question-box {
      background: #0f192c;
      padding: 25px 15px;
      border-radius: 15px;
      margin-bottom: 20px;
    }

    .question-label {
      color: #b5c3dc;
      font-size: 14px;
    }

    #question {
      font-size: 30px;
      color: #ffd166;
      overflow-wrap: anywhere;
      margin: 18px 0 10px;
    }

    #hint {
      color: #b5c3dc;
      font-size: 14px;
    }

    .answers {
      display: flex;
      gap: 12px;
      margin-bottom: 18px;
    }

    button {
      border: none;
      border-radius: 10px;
      padding: 15px;
      font-size: 17px;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.15s, opacity 0.15s;
    }

    button:hover:not(:disabled) {
      transform: translateY(-2px);
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }

    .answer {
      flex: 1;
      color: #10172a;
    }

    .true-btn {
      background: #65e6c2;
    }

    .false-btn {
      background: #ff7b91;
    }

    #feedback {
      min-height: 48px;
      line-height: 1.5;
      color: #dce6f8;
      margin: 12px 0;
    }

    #nextBtn, #restartBtn {
      background: #668cff;
      color: white;
      width: 100%;
      margin-top: 8px;
    }

    #restartBtn {
      background: #65a9ff;
    }

    .hidden {
      display: none;
    }

    .progress-track {
      height: 8px;
      border-radius: 20px;
      background: #35445e;
      overflow: hidden;
      margin-bottom: 20px;
    }

    #progress {
      height: 100%;
      width: 0%;
      background: #65e6c2;
      transition: width 0.3s;
    }

    @media (max-width: 420px) {
      .game {
        padding: 20px;
      }

      h1 {
        font-size: 27px;
      }

      #question {
        font-size: 24px;
      }
    }
  </style>
</head>

<body>
  <main class="game">
    <h1>⚡ Boolean Battle</h1>
    <p class="subtitle">Think fast. Choose wisely. Win the battle!</p>

    <div class="stats">
      <div class="stat">
        Score
        <span id="score">0</span>
      </div>
      <div class="stat">
        Lives
        <span id="lives">❤️❤️❤️</span>
      </div>
      <div class="stat">
        Streak
        <span id="streak">0</span>
      </div>
    </div>

    <div class="progress-track">
      <div id="progress"></div>
    </div>

    <section class="question-box">
      <div class="question-label" id="round">QUESTION 1</div>
      <h2 id="question">true && false</h2>
      <p id="hint">Will the result be true or false?</p>
    </section>

    <div class="answers" id="answers">
      <button class="answer true-btn" onclick="checkAnswer(true)">
        TRUE ✓
      </button>
      <button class="answer false-btn" onclick="checkAnswer(false)">
        FALSE ✗
      </button>
    </div>

    <p id="feedback" aria-live="polite">Choose your answer!</p>

    <button id="nextBtn" class="hidden" onclick="nextQuestion()">
      Next Question →
    </button>

    <button id="restartBtn" class="hidden" onclick="startGame()">
      Play Again 🔄
    </button>
  </main>

  <script>
    const questions = [
      {
        expression: "true && false",
        answer: false,
        explanation: "AND (&&) needs both values to be true."
      },
      {
        expression: "true || false",
        answer: true,
        explanation: "OR (||) needs only one value to be true."
      },
      {
        expression: "!true",
        answer: false,
        explanation: "NOT (!) reverses true into false."
      },
      {
        expression: "!false",
        answer: true,
        explanation: "NOT (!) reverses false into true."
      },
      {
        expression: "true && true",
        answer: true,
        explanation: "Both values are true, so AND returns true."
      },
      {
        expression: "false || false",
        answer: false,
        explanation: "Neither value is true, so OR returns false."
      },
      {
        expression: "5 > 3",
        answer: true,
        explanation: "Five is greater than three."
      },
      {
        expression: "4 === 7",
        answer: false,
        explanation: "Four is not equal to seven."
      },
      {
        expression: "(true && false) || true",
        answer: true,
        explanation: "AND runs first: false || true becomes true."
      },
      {
        expression: "!(true || false)",
        answer: false,
        explanation: "true OR false is true; NOT makes it false."
      },
      {
        expression: "10 <= 10",
        answer: true,
        explanation: "The <= operator means less than or equal to."
      },
      {
        expression: "false && true",
        answer: false,
        explanation: "AND returns false if either value is false."
      },
      {
        expression: "!(false && false)",
        answer: true,
        explanation: "false AND false is false; NOT makes it true."
      },
      {
        expression: "8 !== 8",
        answer: false,
        explanation: "!== means not equal. Both values are 8."
      },
      {
        expression: "(5 > 2) && (3 < 1)",
        answer: false,
        explanation: "The first comparison is true, but the second is false."
      }
    ];

    let deck = [];
    let current = 0;
    let score = 0;
    let lives = 3;
    let streak = 0;
    let bestStreak = 0;
    let answered = false;

    const $ = (id) => document.getElementById(id);

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function startGame() {
      deck = shuffle([...questions]);
      current = 0;
      score = 0;
      lives = 3;
      streak = 0;
      bestStreak = 0;
      answered = false;

      $("restartBtn").classList.add("hidden");
      $("nextBtn").classList.add("hidden");
      $("answers").classList.remove("hidden");

      updateStats();
      showQuestion();
    }

    function updateStats() {
      $("score").textContent = score;
      $("lives").textContent = "❤️".repeat(lives) + "🖤".repeat(3 - lives);
      $("streak").textContent = streak;
      $("progress").style.width =
        (current / deck.length * 100) + "%";
    }

    function showQuestion() {
      answered = false;

      const q = deck[current];

      $("round").textContent =
        `QUESTION ${current + 1} OF ${deck.length}`;
      $("question").textContent = q.expression;
      $("hint").textContent = "Will the result be true or false?";
      $("feedback").textContent = "Choose your answer!";
      $("nextBtn").classList.add("hidden");

      document.querySelectorAll(".answer").forEach(button => {
        button.disabled = false;
      });

      updateStats();
    }

    function checkAnswer(choice) {
      if (answered || lives <= 0) return;

      answered = true;

      const q = deck[current];
      const correct = choice === q.answer;

      document.querySelectorAll(".answer").forEach(button => {
        button.disabled = true;
      });

      if (correct) {
        score += 10;
        streak++;
        bestStreak = Math.max(bestStreak, streak);

        $("feedback").textContent =
          "✅ Correct! " + q.explanation;
      } else {
        lives--;
        streak = 0;

        $("feedback").textContent =
          "❌ Not quite! The answer is " +
          String(q.answer).toUpperCase() + ". " +
          q.explanation;
      }

      updateStats();

      if (lives === 0 || current === deck.length - 1) {
        endGame();
      } else {
        $("nextBtn").classList.remove("hidden");
      }
    }

    function nextQuestion() {
      if (!answered) return;

      current++;
      showQuestion();
    }

    function endGame() {
      $("answers").classList.add("hidden");
      $("nextBtn").classList.add("hidden");
      $("restartBtn").classList.remove("hidden");

      $("progress").style.width =
        ((current + 1) / deck.length * 100) + "%";

      let message;

      if (lives === 0) {
        message = "💥 Game over!";
      } else {
        message = "🏆 You completed the game!";
      }

      $("round").textContent = "GAME FINISHED";
      $("question").textContent = `${score} POINTS`;
      $("hint").textContent =
        `Best streak: ${bestStreak} | Questions answered: ${current + 1}`;

      $("feedback").textContent =
        `${message} Final score: ${score} out of ${deck.length * 10}.`;
    }

    startGame();
  </script>
</body>
</html>
