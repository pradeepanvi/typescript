"use strict";
/*  Index Properties :
 */
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
var userInputElement = document.getElementById("user-input");
userInputElement.value = "Hi there!";
var errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital character!",
};
