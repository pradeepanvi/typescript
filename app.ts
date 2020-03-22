const person = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Football"]
};

let nextStep: string[];
nextStep = ["Ball"];

console.log(nextStep);

for (const item of person.hobbies) {
  console.log(item.toUpperCase());
}
