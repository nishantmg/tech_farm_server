var express = require('express');
var router = express.Router();
var consumptionController = require('../controllers/ConsumptionController');

router.get('/', consumptionController.index);

router.get('/:code', consumptionController.show);

router.post('/', consumptionController.save);

router.put('/:code', consumptionController.update);

router.delete('/:code', consumptionController.delete);

module.exports = router;