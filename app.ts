/*  02 A First Class Decorator :
 */

function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger

class Person {
  name = 'Max';
  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

// Logging...
// ƒ Person() {
//   this.name = 'Max';
//   console.log('Creating person object...');
// }
// Creating person object...