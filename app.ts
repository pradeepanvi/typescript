/*  Creating a Generic Function :
 */

function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Pradeep" }, { age: 30 });
