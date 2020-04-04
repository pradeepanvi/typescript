/*  Overriding Properties & The "protected" Modifier : 
    protected is same like private but here you can override value;
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

class ITDepartment extends Department {
  constructor(id: string, admins: string[]) {
    super(id, "IT");
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
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
