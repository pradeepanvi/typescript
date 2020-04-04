"use strict";
/*  "readonly" property :
    readonly in public:- user can access public value outside but can't change.
    readonly in private:- user can access private value inside value but can't change.
*/
var Department = /** @class */ (function () {
    //here we have to defined public as well, because it won't take
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("Department: (" + this.id + ") : " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        // validation etc
        // this.id = '3'  user will not able to add any value here
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department("d1", "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Hanna");
accounting.describe();
//Department: (d1) : Accounting
accounting.printEmployeeInformation();
// 2
// app.js:20 (2) ["Max", "Hanna"]
