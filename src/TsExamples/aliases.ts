type Combinable = number | string;

let combina: Combinable = 0;
combina = "Hola"

type User = { name: string; age: number };

function greet(user: User) {
  console.log('Hola soy ' + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}