"use strict";
/*  A First Interface :
    Interface just a structor for use javascript objects
*/
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (pharse) {
        console.log(pharse + " " + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person("Max");
user1.greet("Hi there I am");
console.log(user1);
// Hi there I am Max
// app.js: 18 Person { age: 30, name: "Max" }
