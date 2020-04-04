"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*  Inheritance :
    You can make another class with parent class also can use extra features with using super()
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
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        return _super.call(this, id, "IT") || this;
    }
    return ITDepartment;
}(Department));
var it = new ITDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Hanna");
it.describe();
//Department: (d1) : Accounting
it.printEmployeeInformation();
// 2
// app.js:20 (2) ["Max", "Hanna"]
console.log(it);
// ITDepartment {id: "d1", name: "IT", employees: Array(2)}
// id: "d1"
// name: "IT"
// employees: (2) ["Max", "Hanna"]
