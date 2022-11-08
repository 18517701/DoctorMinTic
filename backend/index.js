
var app = require("./app");
var port = 4000;

var mongoose = require ("./conexionDB/conn")
// Crear el servidor


//Definimos la ruta principal
/* app.get('/', (req, res) => {
    res.send('Hola Mundo');
  

}); */

app.listen(4000, () => {
    console.log('Servidor corriendo sin problema ')
});


