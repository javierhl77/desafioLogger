//mock: 

const express = require("express");
const app = express();
const PUERTO = 8080;

const compression = require("express-compression");

//importar logger:
const addLogger = require("./utils/logger.js");

const userRouter = require("./routes/usuario.router.js");
const ManejadorErrores = require("./middlewares/error.js");
const { http, verbose } = require("winston");


//middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(ManejadorErrores);
app.use(addLogger);
//app.use("/api/usuarios", userRouter);

app.use("/", userRouter);

/* app.get("/",(req,res) => {
  let string = ("hola coders,somos programadores y no sabemos arreglar impresoras")
  for (let i = 0; i < 5e4; i++) {
    string += "hola coders,somos programadores y no sabemos arreglar impresoras ";
  }
  res.send(string);


}) */

//Desafio de LOGGERS (instalar winston: npm install winston )

{
  error: 0;
  warn: 1;
  info: 2;
  http: 3;
  verbose: 4;
  debug: 5;
  silly: 6;
}

app.get("/saludo",(req,res) => {
   res.send("holis!!")
})

app.get("/loggertest", (req,res) => {
  req.logger.error("error");
  req.logger.warn("warn");

  req.logger.info("info");

  res.send("Logs generados")
})



app.listen(PUERTO, () =>{
    console.log(`escuchando en el puerto:${PUERTO}`)
})

//sin compresion 3,3mb
//con compression 11,4 kb