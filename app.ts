/*  "readonly" property : 
    readonly in public:- user can access public value outside but can't change.
    readonly in private:- user can access private value inside value but can't change.
*/
class Department {
  private employees: string[] = [];

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

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Hanna");

accounting.describe();
//Department: (d1) : Accounting
accounting.printEmployeeInformation();
// 2
// app.js:20 (2) ["Max", "Hanna"]
