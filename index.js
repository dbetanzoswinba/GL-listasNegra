//importaciones
require('dotenv').config();
const CronJob = require('cron').CronJob;
const { setMensaje, setError } = require('./controllers/logger');
const { descargarDocumentos } = require('./jobs/descargaDocumentos');
const { analizarDirectorio } = require('./jobs/analizarDirectorio');
const { procesarDocumento, estandarizarDoc } = require('./controllers/documentoControler');
let contador = 0;

const job = new CronJob('23 19 * * *',async ()=>{
    try{
        console.log('Iniciando el processo...!!');
        // setMensaje(`Comenzando el proceso ... ${ new Date().getDate() }`);
        const arrayDocs = await descargarDocumentos();
        console.log(await cambiarArchivo(arrayDocs));
        console.log('terminamos el proceso temporal');
        return
        let documentos = analizarDirectorio();
        while(contador < documentos.length){
            try {
                const documento = `./docs/${documentos[contador]}`;
                let respuesta = await procesarDocumento(documento);
                console.log(respuesta);
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

const cambiarArchivo = async docs =>{
    return new Promise((resolve,reject)=>{
        analizarDirectorio().map(async item=>{
            const documento = `./docs/${item}`;
            if(documento.toUpperCase().includes('SAT')){
                await estandarizarDoc(documento);
                resolve(true);

            }
        });
    })
}
job.start();
