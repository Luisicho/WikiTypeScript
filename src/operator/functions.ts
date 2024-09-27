const fun = (a: number, b: number) => {
  return a + b;
};

const fun2 = (a: number, b: number) => a + b;

const imprime: (a: number | string) => void = (output) => console.log(output);

imprime(fun2(1, 2));

const sumatoria = (...numbers: number[]) => {
  numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
const addNumeros = sumatoria(1,2,3,4,5,6);
console.log(addNumeros);
