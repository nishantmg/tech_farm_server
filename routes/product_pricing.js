var express = require('express');
var router = express.Router();
var productPricingController = require('../controllers/ProductPricingController');

router.get('/', productPricingController.index);

router.get('/:code', productPricingController.show);

router.post('/', productPricingController.save);

router.put('/:code', productPricingController.update);

router.delete('/:code', productPricingController.delete);

module.exports = router;