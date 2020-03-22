/*Enum :- 
  If you want number like
  ADMIN = 0,
  READ_ONLY = 1,
  AUTHOR = 2
  So here is the latest type of TypeScript Enum there user can add only values and number will be append automatically.
}
*/
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Football"],
  role: Role.READ_ONLY
};

console.log(person);
