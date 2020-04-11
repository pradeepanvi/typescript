"use strict";
/*  Working with Constraints :
    It will strict that only object will pass as a parameter
 */
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
//const mergeObj = merge({ name: "Pradeep" }, 30); this won't work
var mergeObj = merge({ name: "Pradeep" }, { age: 30 });
