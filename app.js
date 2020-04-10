"use strict";
/*  Nullish Coalescing :
    userInput ?? "DEFAULT" If userInput value will be undefined or null than the DEFAULT value will show.
 */
var _a;
// If we will not user above function than split will not work
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = add("Max", "Same");
result.split(" ");
var fetchedUserData = {
    id: "u1",
    name: "Max",
    job: { title: "CEO" },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// const userInput = "";
var userInput = undefined;
var storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedData);
