/*  06 Diving into Property Decorators :

 */

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

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

  getPriceWithTax(tax: number) {
    return this.price * (1 + tax);
  }
}

// Property decorator!
// app.js: 13 { getPriceWithTax: ƒ, constructor: ƒ } getPriceWithTax: ƒ(tax)constructor: ƒ Product(t, p)set price: ƒ(val)__proto__: Object "title"