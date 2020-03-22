/*Literal Type :-
  It's same kind of Union Type but here need to add one extra parameter.
  function combine(number | string, number | string, 'as-number' | 'as-text'){}
}
*/
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineNames = combine("Max", "Kumar", "as-text");
console.log(combineNames);
