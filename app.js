var person = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Football"]
};
var nextStep;
nextStep = ["Ball"];
console.log(nextStep);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var item = _a[_i];
    console.log(item.toUpperCase());
}
