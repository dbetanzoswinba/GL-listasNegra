const CronJob = require('cron').CronJob;
const { descargarDocumentos } = require('./jobs/descargaDocumentos');
const { analizarDirectorio } = require('./jobs/analizarDirectorio');
const { leerDocumentos } = require('./controllers/documentoControler');

const job = new CronJob('00 19 * * *', ()=>{
    descargarDocumentos();
});

const job2 = new CronJob('*/25 * * * * *',()=>{
    const documentos = analizarDirectorio();
    if(documentos.length > 0 && documentos.length <=11){
        const ruta = './docs/';
        documentos.forEach((documento,indice) =>{
                leerDocumentos(`${ruta}${documento}`);
            // console.log('*******************************');
            // console.log(documento);
            // console.log('*******************************\n');
        });
        job2.stop();
        console.log('Archivos encontrados...!!');
    }else{
        console.log(new Date(),'No existen datos en el arreglo');
    }
});

job.start();
job2.start();