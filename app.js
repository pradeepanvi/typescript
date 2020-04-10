"use strict";
/*  Creating a Generic Function :
    Whenever you see Array or Promise <any>
 */
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergeObj = merge({ name: "Pradeep" }, { age: 30 });
