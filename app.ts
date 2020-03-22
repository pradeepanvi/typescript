const person: {
  name: string;
  age: number;
  hobbies: string[];
  //Tuples: It's a kind of array there user can add limited value in array also type will be strict.
  role: [number, string];
} = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Football"],
  role: [12, "author"]
};

console.log(person.role);
