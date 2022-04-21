//Archivo que trabajará la lógica de la entidad Usuario.
const Sequelize = require('sequelize');
const db = require("./db");
const { setMensaje, setError } = require('../controllers/logger');
const CondonadosArt74CFF = db.define('condonadosArt74CFF', {
  rfc : {
    type: Sequelize.STRING
  },
  razonSocial: {
    type: Sequelize.STRING
  },
  tipoPersona : {
    type: Sequelize.TEXT
  },
  supuesto : {
    type: Sequelize.STRING
  },
  fechaPrimeraPublicacion:{
    type: Sequelize.STRING
  },
  monto: {
    type: Sequelize.STRING
  },
  fechaPublicacionLeyTransparencia: {
    type: Sequelize.STRING
  },
  entidadFederativa: {
    type: Sequelize.STRING
  }
});

CondonadosArt74CFF.sync()
  .then( response =>{
    //creamos la tabla en caso de no existir
    setMensaje('Tabla CondonadosArt74CFF creada de manera correcta..!!!')
  }).catch(error=>{  
    console.log(error.message);
    setError(`Ah ocurrido un error ${error.message}`);
  });

module.exports = {
    CondonadosArt74CFF
};