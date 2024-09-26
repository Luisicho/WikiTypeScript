"use strict";
function printSuma(n1, n2, imprimir) {
    const resultado = n1 + n2;
    imprimir(resultado);
}
printSuma(1, 2, (numero) => {
    console.log(numero);
});
