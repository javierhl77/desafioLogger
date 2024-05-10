const winston = require("winston");

const logger = winston.createLogger({
    //configurar transporte a nivel de consola para que funcione solo en http
    transports: [
        new winston.transports.Console({
            level: "http"}),
        new winston.transports.File({
                filename: "./errors.log",
                level: "warn"})
        ]
        //agregamos otro transporte, que registre en un archivo:
       
           
})
//crear middleware donde va a ser usado el logger:

const addLogger = (req, res, next) => {
    req.logger = logger;
    req.logger.http(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`);
    next();
}
module.exports = addLogger;
