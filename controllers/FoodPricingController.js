var FoodPricingRepository = require('../repositories/FoodPricingRepository');
var foodPricingRepository = new FoodPricingRepository();
var FoodPricing = require('../models/FoodPricing');

var FoodPricingController = {
    index: async(req,res)=>{
        var food_pricings = await foodPricingRepository.getFoodPricings();
        res.json(food_pricings);
    },
    show: async(req,res)=>{
        var code = req.params.code;
        var food_pricing = await foodPricingRepository.getFoodPricingByCode(code);
        res.json(food_pricing);
    },
    save: async(req,res)=>{
        var data = req.body;
        var code = req.params.code;
        var food_pricings = new FoodPricing();
        food_pricings.food_code= data.food_code;
        food_pricings.price= data.price;
        food_pricings.created_at= new Date();
        food_pricings.updated_at= new Date();
        var food_pricing = await foodPricingRepository.saveFoodPricing(food_pricings);
        res.json(food_pricing);
    },
    update: async(req,res)=>{
        var data = req.body;
        var code = req.params.code;
        var food_pricing = await foodPricingRepository.updateFoodPricingByCode(data,code);
        res.json(food_pricing);
    },
    delete: async(req,res)=>{
        var code = req.params.code;
        var data = {
            deleted_at : new Date()
        }
        var food_pricing = await foodPricingRepository.deleteFoodPricingByCode(data,code);
        res.json(food_pricing);
    }
}

module.exports = FoodPricingController;