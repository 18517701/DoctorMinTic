var Schema = mongoose.Schema;

var CitaSchema = Schema ({ 

    idCita: Number,
    fecha: String,
    hora: String,
    consultorio: String,
    estado: String,

});

const Cita = mongoose.model('cita', CitaSchema);

module.exports = Cita;
