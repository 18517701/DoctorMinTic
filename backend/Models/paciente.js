var mongoose = require('mongoose');
var  Schema = mongoose.Schema;

var  PacienteSchema = new Schema({

    idPaciente: {
        type:Number},
    nombrePaciente:{
        type: String},
    correo: {
        type:String},
    password: {
        type:Number},
    telefono: {
        type:Number},
    epsUsuario: {
        type:String}, 
    
}, { 
    collection: 'paciente'
});

/* PacienteSchema.methods.comprobarPassword= async function(passwordFormulario){
    if(passwordFormulario==this.password){
        return true;
    }else{
        return false;
    }
} */

const Paciente = mongoose.model( 'paciente ', PacienteSchema);
module.exports = Paciente;