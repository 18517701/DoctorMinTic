var Paciente = require ('../Models/paciente')

function prueba ( req ,res) {
    res.status(200).send({ 
        message: 'Hola Mundo desde el servidor de NodeJS'
       
    });
    
}


function allPacientes (req, res){
    var result = Paciente.find({}).sort("nombrePaciente");
    result.exec(function(err, result){
        if(err){
            res.status(500).send({message: 'Error en la petición'});
        }else{
            if(!result){
                res.status(404).send({message: 'No hay pacientes'});
            }else{
                res.status(200).send({result});
            }
        }
    });

}
function searchPacientes ( req , res) {
    var idPaciente = req.params.idPaciente;
    Paciente.findById(idPaciente).exec(function(err, result){
        if(err){
            res.status(500).send({message: 'Error en la petición'});
        }else{
            if(!result){
                res.status(404).send({message: 'No hay pacientes'});
            }else{
                res.status(200).send({result});
            }
        }
    });
}
function savePacientes ( req , res) {
    var paciente = new Paciente();
    var params = req.body;
    paciente.idPaciente = params.idPaciente;
    paciente.nombrePaciente = params.nombrePaciente;
    paciente.correo = params.correo;
    paciente.password = params.password;
    paciente.telefono = params.telefono;
    paciente.epsUsuario = params.epsUsuario;
    paciente.save((err, pacienteStored) => {
        if(err){
            res.status(500).send({message: 'Error al guardar el paciente'});
        }else{
            res.status(200).send({paciente: pacienteStored});
        }
    });
}
function updatePacientes ( req , res) {
    var idPaciente = req.params.idPaciente;
    var update = req.body;
    Paciente.findByIdAndUpdate(idPaciente, update, (err, pacienteUpdated) => {
        if(err){
            res.status(500).send({message: 'Error al actualizar el paciente'});
        }else{
            res.status(200).send({paciente: pacienteUpdated});
        }
    });
}
function deletePacientes ( req , res) {
    var idPaciente = req.params.idPaciente;
    Paciente.findByIdAndRemove(idPaciente, (err, pacienteRemoved) => {
        if(err){
            res.status(500).send({message: 'Error al eliminar el paciente'});
        }else{
            res.status(200).send({paciente: pacienteRemoved});
        }
    });

}

module.exports = {
    prueba,
    allPacientes,
    searchPacientes,
    savePacientes,
    updatePacientes,
    deletePacientes,
}