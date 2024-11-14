type Combinable2 = string | number;

function sumatoria3(a:number, b:number): number;
function sumatoria3(a:string, b:string): string;
function sumatoria3(a:Combinable2, b:Combinable2){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}
