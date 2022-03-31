const fs = require('fs');
const cvs = require('csv-parser');
const result = [];

const leerDocumentos = (doc)=>{
    try{
        fs.createReadStream(doc)
        .setEncoding('UTF8')
        .pipe(cvs())
        .on('data',data =>{
            result.push(data);
        })
        .on('end',()=>{
            console.log(result);
            console.log(`Lectura de : ${doc} terminada....!!!`);
        })
    }catch(error){
        console.log(error.message);
    }
}

const estandarCabeceras = (doc)=>{
    console.log(doc);
}

module.exports = {
    leerDocumentos
}