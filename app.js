"use strict";
/*  07 Accessor & Parameter Decorators :

 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Log(target, propertyName) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}
var Product = /** @class */ (function () {
    function Product(t, p) {
        this.title = t;
        this._price = p;
    }
    Object.defineProperty(Product.prototype, "price", {
        set: function (val) {
            if (val > 0) {
                this._price = val;
            }
            else {
                throw new Error('Invalid price - should be positive!');
            }
        },
        enumerable: true,
        configurable: true
    });
    Product.prototype.getPriceWithTax = function (tax) {
        return this.price * (1 + tax);
    };
    __decorate([
        Log
    ], Product.prototype, "title", void 0);
    __decorate([
        Log2
    ], Product.prototype, "price", null);
    __decorate([
        Log3,
        __param(0, Log4)
    ], Product.prototype, "getPriceWithTax", null);
    return Product;
}());
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
