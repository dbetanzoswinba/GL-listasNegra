//importaciones
require('dotenv').config();
const CronJob = require('cron').CronJob;
const { setMensaje, setError } = require('./controllers/logger');
const { descargarDocumentos } = require('./jobs/descargaDocumentos');
const { analizarDirectorio } = require('./jobs/analizarDirectorio');
const { procesarDocumento, estandarizarDoc, verificarDocumento } = require('./controllers/documentoControler');
let contador = 0;

const job = new CronJob('47 17 * * *',async ()=>{
    try{
        console.log('Iniciando el processo...!!');
        setMensaje(`Comenzando el proceso ... ${ new Date().getDate() }`);
        await descargarDocumentos();
        //console.log(await cambiarArchivo(arrayDocs));
        let documentos = analizarDirectorio();
        while(contador < documentos.length){
            try {
                const documento = `./docs/${documentos[contador]}`;
                console.log(verificarDocumento(documento));
                //let respuesta = await procesarDocumento(documento);
                //console.log(respuesta);
            } catch (error) {
                console.log(error.message);
            }
            contador++;
        }
        setMensaje(`El proceso ah terminado ... ${new Date().getDate()}`);
        console.log('El proceso ah terminado...!!');
    }catch(error){
        setError(`Ah ocurrido un error durante el proceso ${error.message}`);
        console.log('Ah ocurrido un error durante el proceso',error.message);
    }
});

job.start();
