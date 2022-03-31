var http = require('http'); 
var fs = require('fs'); 
const { consultas69CFF } = require('../helpers/dataListas69FF');



const obtenerDocumento = (url,nombreArchivo) => {
  return new Promise((resolve,reject)=>{
    try {
      var file = fs.createWriteStream(`./docs/${nombreArchivo}.csv`,'utf-8'); 
      var request =  http.get(url, function(response) { 
      response.pipe(file); 
      file.on('finish',()=>{
        file.close();
        resolve(`${nombreArchivo} creado correctamente : ${new Date()}`);
      });
    });
    } catch (error){
      reject(`Hubo un error en la descarga de ${nombreArchivo}`);
    }
  });
};

const descargarDocumentos = async ()=>{
  const promisesDescargas = [];
  Object.keys(consultas69CFF).forEach( keyObject  =>{
    promisesDescargas.push(obtenerDocumento(consultas69CFF[keyObject], keyObject));
  });
  try{
    const response = await Promise.all(promisesDescargas);
    console.log(await response);
  }catch(error){
    console.log(error.message);
  }
}

module.exports = {
  descargarDocumentos
};
