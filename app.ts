/*  Inheritance : 
    You can make another class with parent class also can use extra features with using super()
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

class ITDepartment extends Department {
  constructor(id: string, admins: string[]) {
    super(id, "IT");
  }
}

const it = new ITDepartment("d1", ["Max"]);

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
