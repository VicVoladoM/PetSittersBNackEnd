let express = require("express");
let petSitterController = require("../controllers/petSitterController");
let api = express.Router();

api.post("/crear-petsitter", petSitterController.crearPetSitter);
api.put("/editar-petsitter/:id", petSitterController.editarPetSitter);
api.delete("/eliminar-petsitter/:id", petSitterController.eliminarPetSitter);
api.get("/consultar-petsitters", petSitterController.obtenerPetSitters);
api.get("/consultar-petsittersByState/:id", petSitterController.obtenerPetSittersByState);
api.post("/agregar-petsittertype", petSitterController.AgregarPetSitterType);
api.get("/consultar-petsittersByType/:id", petSitterController.obtenerPetSitterByType);

module.exports = api;