class Department {
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
  describe() {
    console.log("Departamento: " + this.name);
  }
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
}

const contaduria = new Department("C1", "Contaduria");

const empleado = Department.createEmployee("luis");

contaduria.addEmployee("Luis");
contaduria.addEmployee("Miguel");

contaduria.describe();
contaduria.printEmployeeInformation();
