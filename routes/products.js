var express = require('express');
var router = express.Router();
var productsController = require('../controllers/ProductsController');

router.get('/', productsController.index);

router.get('/:code', productsController.show);

router.post('/', productsController.save);

router.put('/:code', productsController.update);

router.delete('/:code', productsController.delete);

module.exports = router;
