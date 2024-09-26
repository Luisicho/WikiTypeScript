"use strict";
function HolaMundo2() {
    console.log("Hola Mundo");
}
let copyHello2;
copyHello2 = HolaMundo2;
copyHello2();
function sumar2(n1, n2) {
    return n1 + n2;
}
let sumatoria2;
sumatoria2 = sumar2;
// sumatoria = HolaMundo //Error
console.log(sumatoria2(1, 2));
