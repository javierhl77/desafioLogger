const express = require("express");
const router = express.Router();
const generarUsuarios = require("../utils/utils.js");

const {generarInfoError} = require("../service/errors/info.js");
const { EErrors} = require("../service/errors/enums.js");
const CustomError = require("../service/errors/custom-error.js");

/* router.get("/", (req, res) => {
    const usuario = [];
    for (let i = 0; i < 10; i++ ){
        usuario.push(generarUsuarios());
    }
  res.json(usuario);
}); */

const arrayUsuarios = [];

// ruta provisoria Post para registrar un usuario, verificando si falta ulgun dato con custom-error
router.post("/", async(req,res,next) => {
 
  const  { nombre, apellido ,email} = req.body;

  try {

    if(!nombre || !apellido || !email) {
      throw CustomError.crearError({
        nombre: "usuarioNuevo",
        causa: generarInfoError({nombre,apellido,email}),
        mensaje: ("error al intentar crear un usuario"),
        codigo: EErrors.TIPO_INVALIDO
      })
    }
    const usuario = {
      nombre,
      apellido,
      email
    }
    arrayUsuarios.push(usuario);
    console.log(arrayUsuarios);
    res.send({status: "succes", payload: usuario});
  } catch (error) {

    next(error);
  }


})



module.exports = router;