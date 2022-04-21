const { Cancelados } = require("./Cancelados");
const { CondonadosArt146BCFF } = require("./CondonadosArt146BCFF");
const { CondonadosArt21CFF } = require("./CondonadosArt21CFF");
const { CondonadosArt74CFF } = require("./CondonadosArt74CFF");
const { CondonadosporDecreto } = require("./CondonadosPorDecreto");
const { Exigibles } = require("./Exigibles");
const { Firmes } = require("./Firmes");
const { Listas69B } = require("./Listas69BSat");
const { NoLocalizados } = require("./NoLocalizados");
const { RetornoInversiones } = require("./RetornoInversiones");
const { Sentencias } = require("./Sentencias");


const manejadorModelo = modelo =>{
    switch(modelo){
        case 'Cancelados':
            return Cancelados;
        case 'Condonadosart74CFF':
            return CondonadosArt74CFF;
        case 'Condonadosart146BCFF':
            return CondonadosArt146BCFF;
        case 'Condonadosart21CFF':
            return CondonadosArt21CFF;
        case 'CondonadosporDecreto':
            return CondonadosporDecreto;
        case 'Retornoinversiones':
            return RetornoInversiones;
        case 'Exigibles':
            return Exigibles;
        case 'Firmes':
            return Firmes;
        case 'No_localizados':
            return NoLocalizados;
        case 'Sentencias':
            return Sentencias;
        case 'Lista69bSat':
            return Listas69B; 
    }
}

module.exports = {
    manejadorModelo
}
