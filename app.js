"use strict";
/*  Built-in Generics & What are Generics? :
    Whenever you see Array or Promise <any>
 */
var names = []; // string []
names[0].split(" ");
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(10);
    }, 2000);
});
promise.then(function (data) { });
