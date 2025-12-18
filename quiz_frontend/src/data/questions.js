/**
 * Local quiz questions data.
 * No backend calls are required; this is embedded data.
 */
export const questions = [
  {
    id: "q1",
    question: "Which HTML element is used to link a JavaScript file?",
    options: ["<js>", "<javascript>", "<script>", "<link>"],
    correctIndex: 2,
    explanation: "JavaScript is loaded into HTML using the <script> tag.",
  },
  {
    id: "q2",
    question: "In React, what is the correct way to update state based on the previous state?",
    options: [
      "setCount(count + 1)",
      "setCount(prev => prev + 1)",
      "count = count + 1",
      "this.count++",
    ],
    correctIndex: 1,
    explanation: "Use the functional updater form when next state depends on previous state.",
  },
  {
    id: "q3",
    question: "Which CSS property controls the spacing between lines of text?",
    options: ["letter-spacing", "line-height", "text-indent", "white-space"],
    correctIndex: 1,
    explanation: "line-height sets the distance between baselines of text lines.",
  },
  {
    id: "q4",
    question: "Which HTTP method is typically used to create a new resource?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctIndex: 1,
    explanation: "POST is commonly used to create new resources on the server.",
  },
  {
    id: "q5",
    question: "What does the JavaScript operator '===' check?",
    options: [
      "Value equality only",
      "Reference equality only",
      "Value equality with type coercion",
      "Value and type equality",
    ],
    correctIndex: 3,
    explanation: "=== is strict equality: it checks both value and type with no coercion.",
  },
  {
    id: "q6",
    question: "Which accessibility attribute best labels a control when visible text isn’t available?",
    options: ["role", "aria-label", "tabindex", "title"],
    correctIndex: 1,
    explanation: "aria-label provides an accessible name when there is no visible label text.",
  },
  {
    id: "q7",
    question: "What is the purpose of React keys when rendering lists?",
    options: [
      "To style list items",
      "To uniquely identify elements for efficient reconciliation",
      "To enable routing",
      "To prevent re-renders entirely",
    ],
    correctIndex: 1,
    explanation: "Keys help React match elements between renders for efficient updates.",
  },
];
