import { Question } from "../types/Question";

export const questions: Question[] = [
  {
    question: "What is the difference between 'interface' and and 'type' in TypeScript?",
    choices: [
      "Interfaces can be merged, types cannot.",
      "Types can be merged, interfaces cannot.",
      "They are exactly the same.",
      "Interfaces can't declare functions."  
    ],
    answer: 0,
    explanation: "Interfaces can be merged (declaration merging), but types cannot."
  },
  {
    question: "Which keyword is used to create a class method that can be called without an instance?",
    choices: [
      "static",
      "public",
      "abstract",
      "private"
    ],
    answer: 0,
    explanation: "'static' methods belong to the class itself."
  },
  {
    question: "Which keyword creates an immutable, read-only property in TypeScript?",
    choices: ["const", "readonly", "final", "immutable"],
    answer: 1,
    explanation: "The 'readonly' keyword makes a property immutable."
  },
  {
    question: "What is the output of enum members without initializers?",
    choices: [
      "They default to 0, 1, 2,...",
      "They throw a compilation error",
      "They are assigned random values",
      "They are assigned the string of their names"
    ],
    answer: 0,
    explanation: "Enum members without initializers default to 0, 1, 2,..."
  },
  {
    question: "What is a mapped type in TypeScript?",
    choices: [
      "A type that creates new types by mapping over properties of another type",
      "A type that maps variables to functions",
      "A type of interface",
      "A decorator"
    ],
    answer: 0,
    explanation: "Mapped types create new types by transforming properties of existing ones."
  },
  {
    question: "What does the 'async' keyword do?",
    choices: [
      "Makes a function return a Promise",
      "Makes a function synchronous",
      "Makes a variable async",
      "Declares a type"
    ],
    answer: 0,
    explanation: "'async' makes a function return a Promise, enabling await."
  }
];
