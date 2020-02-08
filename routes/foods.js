var express = require('express');
var router = express.Router();
var foodController = require('../controllers/FoodsController');

router.get('/', foodController.index);

router.get('/:code', foodController.show);

router.post('/', foodController.save);

router.put('/:code', foodController.update);

router.delete('/:code', foodController.delete);

module.exports = router;