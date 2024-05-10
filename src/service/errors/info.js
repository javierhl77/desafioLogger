

const generarInfoError = (usuario) => {

    return `los datos estan incompletos o son invalidos
    enviar:
    -nombre: string ,pero recibimos ${usuario.nombre}
    -apelilido: string ,pero recibimos ${usuario.apellido}
    -email: string ,recibimos ${usuario.email}`

}

module.exports = {
    generarInfoError


}