const names = ['max','luis'];
// Usando la función con diferentes tipos:
const result1 = Array<number>(42); // T se infiere como número
const result22 = Array<string>("Hello"); // T se infiere como string