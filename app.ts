/*  Optional Parameters & Properties :
 */

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(pharse: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(pharse: string) {
    if (this.name) {
      console.log(pharse + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user1: Greetable;

user1 = new Person("Max");
// user1.name = 'Sam'; // you can't add this now

user1.greet("Hi there I am");
console.log(user1);
// Hi there I am Max
// app.js: 18 Person { age: 30, name: "Max" }
