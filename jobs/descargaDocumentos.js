var http = require('http'); 
var fs = require('fs'); 
const { consultas69CFF } = require('../helpers/dataListas69FF');



const obtenerDocumento = async (url,nombreArchivo) => {
    var file = fs.createWriteStream(`${nombreArchivo}.csv`,'utf-8'); 
    var request = await http.get(url, function(response) { 
      response.pipe(file); 
      file.on('finish',()=>{
        file.close();
        console.log('Documento Creado');
      });
    });
};

const descargarDocumentos = ()=>{
  const arrayPromisesDescargas = [];
  Object.keys(consultas69CFF).forEach( urlItem  =>{

  });
}

module.exports = {
  descargarDocumentos
};
