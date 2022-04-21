var http = require('http'); 
var fs = require('fs'); 
const { consultas69CFF } = require('../helpers/dataListas69FF');
const { setMensaje, setError } = require('../controllers/logger');

const descargarDocumentos = async ()=>{
  return new Promise(async(resolve, reject)=>{
    try{
      const promisesDescargas = [];
      Object.keys(consultas69CFF).forEach( async keyObject  =>{
        promisesDescargas.push(obtenerDocumento(consultas69CFF[keyObject], keyObject));
      });
      const response = await Promise.all(promisesDescargas);
      if(response){
        setMensaje('Documentos descargados correctamente');
        console.log('Documentos generados correctamente');
        resolve(true)
      }
      response ? true : false;
    }catch(error){
      reject(error);
      console.log(error.message);
      setError('Error al descargar los documentos');
    }
  })
}

const obtenerDocumento = (url,nombreArchivo) => {
  return new Promise(async (resolve,reject)=>{
    try {
      let file = fs.createWriteStream(`./docs/${ nombreArchivo }.csv`,'utf-8'); 
      try {
        await http.get(url,function(response){ 
        response.pipe(file); 
        file.on('finish',()=>{
          file.close();
          setMensaje(`${ nombreArchivo } creado correcatamente`);
          console.log(`${ nombreArchivo } creado correctamente...!!!`);
          resolve(true);
        });        
      });
      } catch (error) {
        console.log('No pudimos descargar el documento');
      }
    } catch (error){
      reject(`Hubo un error en la descarga de ${ nombreArchivo }`);
      setError('hubo un error inesperado en obtenerDocumento');
      console.log('Ocurrio un error en la descarga');
    }
  });
};

module.exports = {
  descargarDocumentos
};
