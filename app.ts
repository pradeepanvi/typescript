/*  07 Accessor & Parameter Decorators :

 */

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this.price * (1 + tax);
  }
}

// Property decorator!
// app.js: 16 { getPriceWithTax: ƒ, constructor: ƒ } "title"
// app.js: 19 Accessor decorator!
// app.js: 20 { getPriceWithTax: ƒ, constructor: ƒ }
// app.js: 21 price
// app.js: 22 { get: undefined, enumerable: true, configurable: true, set: ƒ }
// app.js: 31 Parameter decorator!
// app.js: 32 { getPriceWithTax: ƒ, constructor: ƒ }
// app.js: 33 getPriceWithTax
// app.js: 34 0
// app.js: 25 Method decorator!
// app.js: 26 { getPriceWithTax: ƒ, constructor: ƒ }
// app.js: 27 getPriceWithTax
// app.js: 28 { writable: true, enumerable: true, configurable: true, value: ƒ }