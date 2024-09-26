"use strict";
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTOR"] = 2] = "AUTOR";
})(Role || (Role = {}));
;
const persona = {
    nombre: "luis",
    edad: 25,
    hobby: ["caminar", "leer"],
    role: Role.ADMIN
};
console.log(persona);
