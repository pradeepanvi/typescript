/*  Nullish Coalescing :
    userInput ?? "DEFAULT" If userInput value will be undefined or null than the DEFAULT value will show.
 */

type Combinable = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
// If we will not user above function than split will not work
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max", "Same");
result.split(" ");

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO" },
};

console.log(fetchedUserData?.job?.title);

// const userInput = "";
const userInput = undefined;
const storedData = userInput ?? "DEFAULT";

console.log(storedData);
