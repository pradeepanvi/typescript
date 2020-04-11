/*  11 Example Creating an Autobind :
    Autobind decorator will be help to autobind this property to the class
 */

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  }
  return adjDescriptor;
}

class Printer {
  message = 'This works!';

  // Before @autobind decorator show message value was coming undefined
  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector('button');
button.addEventListener('click', p.showMessage);

// Before @autobind 
// undefined

// After @autobind
// This works!