var express = require('express');
var router = express.Router();
var animalsController = require('../controllers/AnimalsContoller');

router.get('/', animalsController.index);

router.get('/:code', animalsController.show);

router.post('/', animalsController.save);

router.put('/:code', animalsController.update);

router.delete('/:code', animalsController.delete);

module.exports = router;