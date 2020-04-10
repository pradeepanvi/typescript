/*  Index Properties :
 */

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;
userInputElement.value = "Hi there!";

interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a capital character' }
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};
