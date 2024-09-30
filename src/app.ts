class Department {
  // name: string;
  protected employees: string [] = [];

  constructor(private readonly id: string,public name: string){}
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

class ITDepartment extends Department{
  constructor(id: string, private admins: string[]){
    super(id,"IT") //Constructor de Padre
    console.log(this.employees)
  }
}

const contaduria = new Department("C1","Contaduria");

contaduria.addEmployee("Luis");
contaduria.addEmployee("Miguel");

contaduria.describe();
contaduria.printEmployeeInformation();


