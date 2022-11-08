const mongoose = require("mongoose");//Llamado a la dependencia mongoose
mongoose.connect(//Comando para conectarse con la base de datos en el caso 
"mongodb+srv://doctorApp:12345@tudoctor.ufw7h0x.mongodb.net/doctorApp?retryWrites=true&w=majority", 
    

 (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("La conexion a la base de datos fue correcta...");
    }
  }
);
module.exports = mongoose;