var http = require('http'); 
var fs = require('fs'); 
const getDocuments = async () => {
    var file = fs.createWriteStream("Cancelados.csv"); 
    var request = http.get("http://omawww.sat.gob.mx/cifras_sat/Documents/Cancelados.csv", function(response) { response.pipe(file); });

};

module.exports = {
  getDocuments,
};
