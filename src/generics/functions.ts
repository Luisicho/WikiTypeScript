// function mezclar<T, U>(objA:T, objB:U): T & U{
//     return Object.assign(objA,objB);
// }

// const mergeObj = mezclar<{name:string},{edad:number}>({name:'Luis'},{edad:25});
// console.log(mergeObj.name);

interface Lengthy {
    length: number;
}

function contAndDescribe<T extends Lengthy>(element:T): [T , string]{
    let descriptionText = "No valor";
    if(element.length > 0){
        descriptionText = "tiene " + element.length + " elementos";
    }
    return [element, descriptionText];
}

console.log(contAndDescribe("Hola Amiga"));