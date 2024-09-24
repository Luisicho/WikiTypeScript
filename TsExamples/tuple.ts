const tup: {
  role: [number, string];
} = {
  role: [2, "Administrador"],
};

tup.role.push("admin");
// tup.role[1] = 10;

tup.role = [0,"usuario"]

console.log(tup.role);
