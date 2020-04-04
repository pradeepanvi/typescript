"use strict";
/*  "private" and "public" Access Modifiers:
    public means you can access and modify outside and its a default property */
var Department = /** @class */ (function () {
    //public employees: string[] = [];
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        // validation etc
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department("Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Hanna");
accounting.employees[2] = "Anna";
accounting.describe();
accounting.printEmployeeInformation();
