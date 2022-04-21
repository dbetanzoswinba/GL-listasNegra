//Archivo que trabajará la lógica de la entidad Usuario.
const Sequelize = require('sequelize');
const db = require("./db");
const Sentencias = db.define('sentencias', {
  rfc : {
    type: Sequelize.STRING
  },
  razonSocial : {
    type: Sequelize.STRING
  },
  tipoPersona : {
    type: Sequelize.TEXT
  },
  supuesto : {
    type: Sequelize.STRING
  },
  fechaPrimeraPublicacion : {
    type: Sequelize.STRING
  },
  entidadFederativa: {
    type: Sequelize.STRING
  }
});

Sentencias.sync()
  .then( response =>{
  }).catch(error=>{  
    console.log(error.message);
  });

module.exports = {
    Sentencias
};