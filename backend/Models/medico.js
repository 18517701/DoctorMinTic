var Schema = mongoose.Schema;

var MedicoSchema = Schema ({ 

    idMedico: Number,
    nombreMedico: String,
    especialidad: String,

});

const Medico = mongoose.model('medico', MedicoSchema);

module.exports = Medico;