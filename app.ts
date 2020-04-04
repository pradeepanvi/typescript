/* First Class Function: Function treated as a variable and can be use multiple time with parameter. */
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const accounting = new Department("Accounting");
console.log(accounting);
