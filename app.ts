/*  Working with Constraints :
    It will strict that only object will pass as a parameter
 */

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

//const mergeObj = merge({ name: "Pradeep" }, 30); this won't work
const mergeObj = merge({ name: "Pradeep" }, { age: 30 });
