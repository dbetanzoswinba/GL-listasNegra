const fs = require('fs');
const path = require('path');

const analizarDirectorio = ()=>{
    let documentos = [];
    const rutaDocumentos = path.join(__dirname,'../docs')
        return documentos = fs.readdirSync(rutaDocumentos);
}

module.exports = {
    analizarDirectorio
}
