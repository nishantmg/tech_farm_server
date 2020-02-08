var express = require('express');
var router = express.Router();
var animalTypesController = require('../controllers/AnimalTypesController');

router.get('/', animalTypesController.index);

router.get('/:code', animalTypesController.show);

router.post('/', animalTypesController.save);

router.put('/:code', animalTypesController.update);

router.delete('/:code', animalTypesController.delete);

module.exports = router;