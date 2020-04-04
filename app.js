"use strict";
/*  Constructor Functions & The "this" Keyword:
    Whenever if you want see console of your parameter or value you have to use this keyword with describe() */
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    return Department;
}());
var accounting = new Department("Accounting");
accounting.describe();
//Department: Accounting
var accountingCopy = { describe: accounting.describe };
accountingCopy.describe();
//Department: undefined
