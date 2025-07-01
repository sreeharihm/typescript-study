export const codeExamples = {
  class: `
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
  `,

  generic: `
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("Hello")); // Hello
console.log(identity<number>(123)); // 123
  `,

  interface: `
interface User {
  id: number;
  name: string;
  email?: string; // optional property
}

const user: User = { id: 1, name: "Alice" };
console.log(user);
  `,

  union: `
function formatId(id: number | string) {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return id.toFixed(2);
}

console.log(formatId("abc123")); // ABC123
console.log(formatId(42));       // 42.00
  `,

  enum: `
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
  `,

  mappedType: `
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface Person {
  name: string;
  age: number;
}

const readonlyPerson: Readonly<Person> = { name: "Alice", age: 30 };
// readonlyPerson.age = 31; // Error: cannot assign to readonly property
  `,

  decorator: `
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
  `,

  async: `
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
}

fetchData();
  `,

  tuple: `
let tuple: [string, number];
tuple = ["hello", 10];
console.log(tuple[0]); // hello
console.log(tuple[1]); // 10
  `,

  typeAlias: `
type Point = {
  x: number;
  y: number;
};

const pt: Point = { x: 10, y: 20 };
console.log(pt);
  `,

  intersection: `
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
  `
};
