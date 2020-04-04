/*  "private" and "public" Access Modifiers: 
    public means you can access and modify outside and its a default property */
class Department {
  name: string;
  employees: string[] = [];
  //public employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log("Department: " + this.name);
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

const accounting = new Department("Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Hanna");

accounting.employees[2] = "Anna";

accounting.describe();
accounting.printEmployeeInformation();
