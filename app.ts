/*  Shorthand Initialization: 
    public and private we can defined with other way as well */
class Department {
  private employees: string[] = [];

  //here we have to defined public as well, because it won't take
  constructor(private id: string, public name: string) {}

  describe() {
    console.log(`Department: (${this.id}) : ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Hanna");

accounting.describe();
//Department: (d1) : Accounting
accounting.printEmployeeInformation();
// 2
// app.js:20 (2) ["Max", "Hanna"]
