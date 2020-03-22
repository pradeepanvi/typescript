/*Function Return Types & Void :-
  It's normal function by default return void
}
*/
function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));
