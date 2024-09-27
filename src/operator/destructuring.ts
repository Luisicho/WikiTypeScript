const hobies = ["Hobby1", "Hobby2", "Hobby3"];
const [hobby1, hobby2, ...demasHobbyes] = hobies;
console.log(hobies, hobby1, hobby2);

const personita = {
  nombre: "Luis",
  edad: 3,
};
const { edad, nombre } = personita;
console.log(personita, edad, nombre);
