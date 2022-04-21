const fs = require('fs');
const path = require('path');

const analizarDirectorio = ()=>{
    const rutaDocumentos = path.join(__dirname,'../docs')
        return fs.readdirSync(rutaDocumentos);
}

module.exports = {
    analizarDirectorio
}
