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
/*  Static Methods & Properties :
    It means you can access this within class same class, but not able to access outside means after create new var.
    Department.createEmployee('Max');
    Department.firstYear;
 */
var Department = /** @class */ (function () {
    //here we have to defined public as well, because it won't take
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
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
    Department.firstYear = 2020;
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        //Getters
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No Report found");
        },
        //Setters
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a valid value");
            }
            this.addReport(value);
        },
        enumerable: true,
        configurable: true
    });
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    return AccountingDepartment;
}(Department));
var employee1 = Department.createEmployee("Max");
console.log(employee1, Department.firstYear);
var accounting = new AccountingDepartment("d2", []);
// console.log(accounting.mostRecentReport);
// app.js:52 Uncaught Error: No Report found
//     at AccountingDepartment.get [as mostRecentReport] (app.js:52)
//     at app.js:70
// accounting.addReport("Something");
// console.log(accounting.mostRecentReport);
// Something;
accounting.mostRecentReport = "Max";
console.log(accounting.mostRecentReport);
// Max;
