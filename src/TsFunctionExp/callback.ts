function printSuma(n1: number, n2: number, imprimir: (num: number) => void) {
  const resultado = n1 + n2;
  imprimir(resultado);
}

printSuma(1,2,(numero)=>{
    console.log(numero)
})
