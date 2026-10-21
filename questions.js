// questions.js (The Helper Module)
export const questions = [
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
