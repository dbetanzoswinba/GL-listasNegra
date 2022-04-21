//Archivo que trabajará la lógica de la entidad Usuario.
const Sequelize = require('sequelize');
const db = require("./db");
const { setMensaje, setError } = require('../controllers/logger');
const CondonadosArt146BCFF = db.define('condonadosArt146BCFF', {
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

CondonadosArt146BCFF.sync()
  .then( response =>{
    // console.log('Se ah creado la tabla Cancelados correctamente');
    setMensaje('Tabla CondonadosArt146BCFF creada correctamente');
  }).catch(error=>{  
    console.log(error.message);
    setError(error.message);
  });


module.exports = {
    CondonadosArt146BCFF
};