"use strict";
/*  Optional Parameters & Properties :
 */
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (pharse) {
        if (this.name) {
            console.log(pharse + " " + this.name);
        }
        else {
            console.log("Hi!");
        }
    };
    return Person;
}());
var user1;
user1 = new Person("Max");
// user1.name = 'Sam'; // you can't add this now
user1.greet("Hi there I am");
console.log(user1);
// Hi there I am Max
// app.js: 18 Person { age: 30, name: "Max" }
