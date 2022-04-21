const { createLogger, format, transports } = require('winston');

const clienteLogger = createLogger({
    transports:[
        new transports.File({
            filename: 'generalLoggs.log',
            level: 'info',
            format:format.combine(format.timestamp(),format.json())
        }),
        new transports.File({
            filename: 'error-logs.log',
            level:'error',
            format: format.combine(format.timestamp(),format.json())

        })
    ]
});

const setMensaje = (mensaje)=>{
    clienteLogger.log('info',` ${mensaje} - ${new Date().getDate()}`);
}

const setError = (mensaje) =>{
    clienteLogger.log('error',`${mensaje} - ${new Date().getDate()}`);
}

module.exports = { 
    setMensaje,
    setError 
}