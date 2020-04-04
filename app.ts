/*  Constructor Functions & The "this" Keyword: 
    Whenever if you want see console of your parameter or value you have to use this keyword with describe() */
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");

accounting.describe();
//Department: Accounting

const accountingCopy = { describe: accounting.describe };

accountingCopy.describe();
//Department: undefined
