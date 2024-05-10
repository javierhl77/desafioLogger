

class CustomError {

    static crearError({ nombre = "error", causa = "desconocida", mensaje , codigo = 1}){
        const error = new Error(mensaje);
        error.name = nombre;
        error.causa = causa;
        error.code = codigo;
        throw error; //lanzamos el error ,esto detiene la aplicacion,capturarlo en el otro modulo
    }

}

module.exports = CustomError;