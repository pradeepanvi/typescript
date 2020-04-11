/*  04 Building More Useful Decorators :
 */

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  }
}

// @Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')

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