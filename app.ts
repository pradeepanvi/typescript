/*  09 Returning and changing a Class in a :

 */

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log('Rendering template')
        const hookEl = document.getElementById(hookId);
        const p = new originalConstructor();
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
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
console.log(pers);
