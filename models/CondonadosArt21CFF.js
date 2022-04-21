//Archivo que trabajará la lógica de la entidad Usuario.
const Sequelize = require('sequelize');
const db = require("./db");
const { setMensaje, setError } = require('../controllers/logger');
const CondonadosArt21CFF = db.define('condonadosArt21CFF', {
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

CondonadosArt21CFF.sync()
  .then( response =>{
    setMensaje('Tabla condonadosArt21CFF creada correctamente');
    // console.log('Se ah creado la tabla Cancelados correctamente');
  }).catch(error=>{  
    console.log(error.message);
    setError(error.message);
  });


module.exports = {
    CondonadosArt21CFF
};