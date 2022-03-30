const CronJob = require('cron').CronJob;
const { descargarDocumentos } = require('./jobs/descargaDocumentos');

const job = new CronJob('36 06 * * *', ()=>{
    descargarDocumentos();
});
job.start();