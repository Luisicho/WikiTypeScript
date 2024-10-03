"use strict";
const fun = (a, b) => {
    return a + b;
};
const fun2 = (a, b) => a + b;
const imprime = (output) => console.log(output);
imprime(fun2(1, 2));
const sumatoria = (...numbers) => {
    numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addNumeros = sumatoria(1, 2, 3, 4, 5, 6);
console.log(addNumeros);
