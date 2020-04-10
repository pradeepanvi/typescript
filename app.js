"use strict";
/*  Function Overloads :
 */
// If we will not user above function than split will not work
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = add("Max", "Same");
result.split(" ");
