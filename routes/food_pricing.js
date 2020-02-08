var express = require('express');
var router = express.Router();
var foodPricingController = require('../controllers/FoodPricingController');

router.get('/', foodPricingController.index);

router.get('/:code', foodPricingController.show);

router.post('/', foodPricingController.save);

router.put('/:code', foodPricingController.update);

router.delete('/:code', foodPricingController.delete);

module.exports = router;