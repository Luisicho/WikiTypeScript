"use strict";
const hob = ["Futbol", "Video Juegos"];
const extraHob = ["Brincar"];
extraHob.push(...hob); //Agrego hob a extraHob
const num = {
    valor: 2,
    signo: "+"
};
const copiNum = Object.assign({}, num); //Copia de el objeto
