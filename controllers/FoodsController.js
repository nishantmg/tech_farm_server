var FoodRepository = require('../repositories/FoodsRepository');
var foodRepository = new FoodRepository();
var Foods = require('../models/Foods');

var FoodsController = {
    index: async(req,res)=>{
        var foods = await foodRepository.getFoods();
        res.json(foods);
    },
    show: async(req,res)=>{
        var code = req.params.code;
        var food = await foodRepository.getFoodByCode(code);
        res.json(food);
    },
    save: async(req,res)=>{
        var data = req.body;
        var code = req.params.code;
        var foods = new Foods();
        foods.food_name= data.food_name;
        foods.measurement_unit= data.measurement_unit;
        foods.created_at= new Date();
        foods.updated_at= new Date();   
        var food = await foodRepository.saveFoods(foods);
        res.json(food);
    },
    update: async(req,res)=>{
        var data = req.body;
        var code = req.params.code;
        var food = await foodRepository.updateFoodByCode(data,code);
        res.json(food);
    },
    delete: async(req,res)=>{
        var code = req.params.code;
        var data = {
            deleted_at : new Date()
        }
        var food = await foodRepository.deleteFoodByCode(data,code);
        res.json(food);
    }
}

module.exports = FoodsController;