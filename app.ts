/*  03 Working with Decorator Factories :
 */

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

@Logger('LOGGING - PERSON')

class Person {
  name = 'Max';
  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

// LOGGING - PERSON
// ƒ Person() {
//   this.name = 'Max';
//   console.log('Creating person object...');
// }
// Creating person object...