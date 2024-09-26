function HolaMundo2(): void {
    console.log("Hola Mundo");
}

let copyHello2: Function;
copyHello2 = HolaMundo2;
copyHello2();

function sumar2(n1: number, n2: number){
    return n1 + n2;
}

let sumatoria2: (a: number, b: number) => number;
sumatoria2 = sumar2;
// sumatoria = HolaMundo //Error
console.log(sumatoria2(1,2))
