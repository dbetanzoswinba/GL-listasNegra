//Archivo que trabajará la lógica de la entidad Usuario.
const Sequelize = require('sequelize');
const db = require("./db");
const { setMensaje, setError } = require('../controllers/logger');

const Cancelados = db.define('cancelados', {
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
  fechaCancelacion:{
    type: Sequelize.STRING
  },
  monto: {
    type: Sequelize.STRING
  },
  fechaPublicacion: {
    type: Sequelize.STRING
  },
  entidadFederativa: {
    type: Sequelize.STRING
  }
});

Cancelados.sync()
  .then( response =>{
    //creamos la tabla en caso de no existir
    setMensaje('Tabla Cancelados creada de manera correcta..!!!')
  }).catch(error=>{  
    console.log(error.message);
    setError(`Ah ocurrido un error ${error.message}`);
  });


module.exports = {
  Cancelados
};