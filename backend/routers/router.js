var express = require('express');
    router = express.Router();


var controllerPaciente = require ('../Controllers/ControllersPaciente');

router.get("/prueba", controllerPaciente.prueba);

router.get ("/paciente/all", controllerPaciente.allPacientes);
router.get ("/expert/search/:idPaciente", controllerPaciente.searchPacientes);
router.post ("/paciente/create", controllerPaciente.savePacientes);
router.put ("/paciente/update/:idPaciente", controllerPaciente.updatePacientes);


module.exports = router;
