//Archivo que trabajará la lógica de la entidad Usuario.
const Sequelize = require('sequelize');
const db = require("./db");
const { setMensaje, setError } = require('../controllers/logger');

const Exigibles = db.define('exigibles', {
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
  entidadFederativa: {
    type: Sequelize.STRING
  }
});

Exigibles.sync()
  .then( response =>{
    setMensaje('Se ah creado la tabla Exigibles correctamente');
  }).catch(error=>{  
    console.log(error.message);
    setError(error.message);
  });

module.exports = {
    Exigibles
};