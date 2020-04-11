"use strict";
/*  06 Diving into Property Decorators :

 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(target, propertyName) {
    console.log('Property decorator!');
    console.log(target, propertyName);
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
    return Product;
}());
// Property decorator!
// app.js: 13 { getPriceWithTax: ƒ, constructor: ƒ } getPriceWithTax: ƒ(tax)constructor: ƒ Product(t, p)set price: ƒ(val)__proto__: Object "title"
