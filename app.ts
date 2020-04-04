/*  Getters & Setters : 
    Getters :- means you can get all values of any variable with using get.
    Setters :- means you can set any value in any variable with using set.
*/
class Department {
  protected employees: string[] = [];

  //here we have to defined public as well, because it won't take
  constructor(private readonly id: string, public name: string) {}

  describe() {
    console.log(`Department: (${this.id}) : ${this.name}`);
  }

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

const accounting = new AccountingDepartment("d2", []);
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
