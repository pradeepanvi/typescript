"use strict";
/*  A First Interface :
    Interface just a structor for use javascript objects
*/
var user1;
user1 = {
    name: "Max",
    age: 30,
    greet: function (pharse) {
        console.log(pharse + " " + this.name);
    },
};
user1.greet("Hi there I am");
