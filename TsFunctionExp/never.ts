function generarEror(message: string, code: number): never{
    throw{ message: message, errorCode: code};    
}

generarEror("Ocurrio error", 500)