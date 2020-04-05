/*  Readonly Interface Properties :
 */

interface Greetable {
  readonly name: string;

  greet(pharse: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(pharse: string) {
    console.log(pharse + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Max");
// user1.name = 'Sam'; // you can't add this now

user1.greet("Hi there I am");
console.log(user1);
// Hi there I am Max
// app.js: 18 Person { age: 30, name: "Max" }
