/*  05 Adding Multiple Decorators :
    Multiple Decorators will start from bottom to top excuating.    
 */

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log('Rendering template')
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')

class Person {
  name = 'Max';
  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

// Rendering template
// app.js: 31 Creating person object...
// app.js: 13 LOGGING - PERSON
// app.js: 14 ƒ Person() {
//   this.name = 'Max';
//   console.log('Creating person object...');
// }
// app.js: 31 Creating person object..