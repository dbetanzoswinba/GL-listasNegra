//Archivo que trabajará la lógica de la entidad Usuario.
const Sequelize = require('sequelize');
const db = require("./db");
const { setMensaje, setError } = require('../controllers/logger');

const Listas69B = db.define('listas69B', {
  numero : {
    type: Sequelize.STRING(200),
    allowNull: true
  },
  rfc : {
    type: Sequelize.STRING,
    allowNUll: true
  },
  nombreContribuyente: {
    type: Sequelize.TEXT,
  },
  situacionContribuyente : {
    type: Sequelize.STRING,
    allowNUll : true
  },
  numeroFechaOficioGlobalPresuncionSAT : {
    type: Sequelize.STRING,
    allowNUll : true
  },
  publicacionPaginaSATPresuntos:{
    type: Sequelize.STRING,
    allowNUll : true
  },
  numeroFechaOficioGlobalPresuncionDOF: {
    type: Sequelize.STRING,
    allowNUll : true
  },
  publicacionDOFPresuntos: {
    type: Sequelize.STRING,
    allowNUll : true
  },
  numeroFechaOficioGlobalContribuyentesDesvirtuaronSAT: {
    type: Sequelize.STRING,
    allowNUll : true
  },
  publicacionPaginaSATDesvirtuados: {
    type: Sequelize.STRING,
    allowNUll : true
  },
  numeroFechaOficioGlobalContribuyentesDesvirtuaronDOF: {
    type: Sequelize.STRING,
    allowNUll : true
  },
  publicacionDOFDesvirtuados: {
    type: Sequelize.STRING,
    allowNUll : true
  },
  numeroFechaOficioGlobalDefinitivosSAT: {
    type: Sequelize.STRING,
    allowNUll : true
  },
  publicacionPaginaSATDefinitivos: {
    type: Sequelize.STRING,
    allowNUll : true
  },
  numeroFechaOficioGlobalDefinitivosDOF: {
    type: Sequelize.STRING,
    allowNUll : true
  },
  publicacionDOFDefinitivos: {
    type: Sequelize.STRING,
    allowNUll : true
  },
  numeroFechaOficioGlobalSentenciaFavorableSAT: {
    type: Sequelize.STRING,
    allowNUll : true
  },
  publicacionPaginaSATSentenciaFavorable: {
    type: Sequelize.STRING,
    allowNUll : true
  },
  numeroFechaOficioGlobalSentenciaFavorableDOF: {
    type: Sequelize.STRING,
    allowNUll : true
  },
  publicacionDOFSentenciaFavorable: {
    type: Sequelize.STRING,
    allowNUll : true
  },
});

Listas69B.sync()
  .then( response =>{
    setMensaje('Se ah creado la tabla Listas69B correctamente');
  }).catch(error=>{  
    console.log(error.message); 
    setError(error.message);
  });

module.exports = {
    Listas69B
};