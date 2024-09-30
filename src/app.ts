class Department {
  // name: string;
  private employees: string [] = [];

  constructor(public name: string){}
  describe(){
    console.log('Departamento: '+ this.name)
  }
  addEmployee(employe: string){
    this.employees.push(employe);
  }
  printEmployeeInformation(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const contaduria = new Department("Contaduria");

contaduria.addEmployee("Luis");
contaduria.addEmployee("Miguel");

contaduria.describe();
contaduria.printEmployeeInformation();


