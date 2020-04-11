"use strict";
/*  11 Example Creating an Autobind :
    Autobind decorator will be help to autobind this property to the class
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Autobind(_, _2, descriptor) {
    var originalMethod = descriptor.value;
    var adjDescriptor = {
        configurable: true,
        enumerable: false,
        get: function () {
            var boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
var Printer = /** @class */ (function () {
    function Printer() {
        this.message = 'This works!';
    }
    // Before @autobind decorator show message value was coming undefined
    Printer.prototype.showMessage = function () {
        console.log(this.message);
    };
    __decorate([
        Autobind
    ], Printer.prototype, "showMessage", null);
    return Printer;
}());
var p = new Printer();
var button = document.querySelector('button');
button.addEventListener('click', p.showMessage);
// Before @autobind 
// undefined
// After @autobind
// This works!
