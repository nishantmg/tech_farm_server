var express = require('express');
var router = express.Router();
var productionController = require('../controllers/ProductionController');

router.get('/', productionController.index);

router.get('/:code', productionController.show);

router.post('/', productionController.save);

router.put('/:code', productionController.update);

router.delete('/:code', productionController.delete);

module.exports = router;