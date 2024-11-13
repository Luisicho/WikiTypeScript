type Admin = {
    name: string;
    activo: boolean;
}
type Employee = {
    name: string;
    startDate: Date;
}
type ElevatedEmployee = Admin & Employee;
const e1: ElevatedEmployee = {
    name:"Luis",
    activo: true,
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;