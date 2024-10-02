abstract class Department {
  // name: string;
  protected employees: string[] = [];

  get Employees() {
    return this.employees;
  }

  set Employees(E: string[]) {
    this.Employees = E;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  constructor(private readonly id: string, public name: string) {}
  abstract describe(this: Department): void; 

  addEmployee(employe: string) {
    this.employees.push(employe);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, private admins: string[]) {
    super(id, "IT"); //Constructor de Padre
    console.log(this.employees);
  }
  describe(this: Department){
    console.log("It Departamento");
  }; 
}

const contaduria = new ITDepartment("C1",[]);

const empleado = Department.createEmployee("luis");

contaduria.addEmployee("Luis");
contaduria.addEmployee("Miguel");

contaduria.describe();
contaduria.printEmployeeInformation();
