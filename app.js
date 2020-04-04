"use strict";
/* First Class Function: Function treated as a variable and can be use multiple time with parameter. */
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    return Department;
}());
var accounting = new Department("Accounting");
console.log(accounting);
