// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTOR = 2;

enum Role {ADMIN, READ_ONLY,AUTOR};

const persona = {
    nombre: "luis",
    edad: 25,
    hobby: ["caminar","leer"],
    role: Role.ADMIN
}


console.log(persona)