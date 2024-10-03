"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // name: string;
        this.employees = [];
    }
    describe() {
        console.log('Departamento: ' + this.name);
    }
    addEmployee(employe) {
        this.employees.push(employe);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const contaduria = new Department("C1", "Contaduria");
contaduria.addEmployee("Luis");
contaduria.addEmployee("Miguel");
contaduria.describe();
contaduria.printEmployeeInformation();
