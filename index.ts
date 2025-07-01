import readlineSync, { question } from "readline-sync";

type Question = {
    question: string;
    choices: string[];
    answer: number;
    explanation: string;
};


const questions: Question[] = [
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


function showExample(topic: string) {
  switch (topic) {
    case "class":
      console.log(`
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet() {
    console.log("Hello, " + this.name);
  }
}

const p = new Person("Alice");
p.greet(); // Hello, Alice
      `);
      break;

    case "generic":
      console.log(`
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("Hello")); // Hello
console.log(identity<number>(123)); // 123
      `);
      break;

    case "interface":
      console.log(`
interface User {
  id: number;
  name: string;
  email?: string; // optional property
}

const user: User = { id: 1, name: "Alice" };
console.log(user);
      `);
      break;

    case "union":
      console.log(`
function formatId(id: number | string) {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return id.toFixed(2);
}

console.log(formatId("abc123")); // ABC123
console.log(formatId(42));       // 42.00
      `);
      break;

    case "enum":
      console.log(`
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

function move(dir: Direction) {
  console.log("Moving", Direction[dir]);
}

move(Direction.Up); // Moving Up
      `);
      break;

    case "mappedType":
      console.log(`
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface Person {
  name: string;
  age: number;
}

const readonlyPerson: Readonly<Person> = { name: "Alice", age: 30 };
// readonlyPerson.age = 31; // Error: cannot assign to readonly property
      `);
      break;

    case "decorator":
      console.log(`
// Enable "experimentalDecorators": true in tsconfig.json

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}
      `);
      break;

    case "async":
      console.log(`
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
}

fetchData();
      `);
      break;

    case "tuple":
      console.log(`
let tuple: [string, number];
tuple = ["hello", 10];
console.log(tuple[0]); // hello
console.log(tuple[1]); // 10
      `);
      break;

    case "typeAlias":
      console.log(`
type Point = {
  x: number;
  y: number;
};

const pt: Point = { x: 10, y: 20 };
console.log(pt);
      `);
      break;

    case "intersection":
      console.log(`
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;

const response: ArtworksResponse = {
  success: true,
  artworks: [{ title: "Mona Lisa" }]
};
      `);
      break;

    default:
      console.log("No example for this topic.");
  }
}

let questionAsked=0;
let correctAnswers=0;

function askQuestion(q: Question): boolean {
    console.log("\n"+ q.question);
    q.choices.forEach((choice,index)=>{
        console.log(`${index+1}.${choice}`);
    })

    const userAnswer = readlineSync.question("Your answer (number): ");
    const answerNumber = parseInt(userAnswer,10) - 1;
    questionAsked++;
    if(answerNumber === q.answer) {
        console.log("Correct! 🎉");
        correctAnswers++;
        return true;
    }
    else{
        console.log(`Wrong! ❌ Explanation: ${q.explanation}`);
        return false;
    }
}

function main(){
    console.log("=== TypeScript Interview Prep ===");

    while(true){
        console.log("\nChoose an option:");
        console.log("1. View code example");
        console.log("2. Take a quiz question");
        console.log("3. Exit");

        const choice = readlineSync.question("Enter choice: ");

        if (choice === "1") {
            const topic = readlineSync.question("Enter topic (class, generic, interface, union, enum, mappedType, decorator, async, tuple, typeAlias,intersection): ");
            showExample(topic.trim());
        } else if (choice === "2") {
            const randomIndex = Math.floor(Math.random() * questions.length);
            askQuestion(questions[randomIndex]);
        } else if (choice === "3") {
            console.log(`\nQuiz Summary: ${correctAnswers} out of ${questionAsked} questions answered correctly.`);
            if(questionAsked > 0) {
                console.log(`Score: ${((correctAnswers / questionAsked) * 100).toFixed(1)}%`);
            }
            console.log("Goodbye!");
            break;
        } else {
        console.log("Invalid option.");
        }
    }    
}

main();