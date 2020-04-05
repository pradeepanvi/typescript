/*  A First Interface :
    Interface just a structor for use javascript objects
*/

interface Person {
  name: string;
  age: number;

  greet(pharse: string): void;
}

let user1: Person;

user1 = {
  name: "Max",
  age: 30,
  greet(pharse: string) {
    console.log(pharse + " " + this.name);
  },
};

user1.greet("Hi there I am");
