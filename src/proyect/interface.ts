interface Saludo {
  name: string;
  agree(frase: string): void;
}

let user1: Saludo;

class Persona implements Saludo {
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }
  agree(frase: string): void {
    console.log(frase);
  }
}

user1 = {
  name: "Luis",
  agree(frase: string) {
    console.log(frase);
  },
};
