const CronJob = require('cron').CronJob;
const { getDocuments } = require('./jobs/descargaDocumentos');

const job = new CronJob('45 18 * * *', ()=>{
    getDocuments();
});
job.start();