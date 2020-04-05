/*  Static Methods & Properties :
    It means you can access this within class same class, but not able to access outside means after create new var.
    Department.createEmployee('Max');
    Department.firstYear;
 */
abstract class Department {
  static firstYear = 2020;

  protected employees: string[] = [];

  //here we have to defined public as well, because it won't take
  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // validation etc
    // this.id = '3'  user will not able to add any value here
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  //Getters
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report found");
  }

  //Setters
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.firstYear);

const accounting = new AccountingDepartment("d2", []);
accounting.mostRecentReport = "Max";
console.log(accounting.mostRecentReport);
accounting.describe();
