const fun = (a: number, b: number) => {
  return a + b;
};

const fun2 = (a: number, b: number) => a + b;

const imprime: (a: number | string) => void = (output) => console.log(output);

imprime(fun2(1, 2));
