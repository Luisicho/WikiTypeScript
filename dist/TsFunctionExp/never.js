"use strict";
function generarEror(message, code) {
    throw { message: message, errorCode: code };
}
generarEror("Ocurrio error", 500);
