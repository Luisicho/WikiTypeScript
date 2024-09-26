let userI: unknown;
let userN: string;

userI = 5;
userI = "max";
// userN = userI; //Error
if (typeof userI === "string"){
    userN = userI; //Correcto
}