var ConsumptionRepository = require('../repositories/ConsumptionRepository');
var consumptionRepository = new ConsumptionRepository();
var Consumption = require('../models/Consumption');
var ConsumptionController = {
    index: async(req, res)=> {
        var consumptions = await consumptionRepository.getConsumptions();
        res.json(consumptions);
    },
    show : async(req,res)=>{
        var code = req.params.code;
        var consumption = await consumptionRepository.getConsumptionByCode(code);
        if(!consumption){
        return res.status(404).send();
        }
        res.send(consumption);
    },
    save :  async(req,res)=>{
        var data = req.body;
        var consumptions = new Consumption();
        consumptions.animal_code = data.animal_code;
        consumptions.food_code = data.food_code;
        consumptions.consumed_unit = data.consumed_unit;
        consumptions.consumed_amount = data.consumed_amount;
        consumptions.created_at = new Date();
        consumptions.updated_at = new Date();
        var consumption = await consumptionRepository.saveConsumption(consumptions);
        res.json(consumption);
    },
    update : async(req,res)=>{
        var data = req.body;
        var code = req.params.code;
        var consumption = await consumptionRepository.updateConsumptionByCode(data,code);
        res.status(200).json(consumption);
    },  
   
    delete :  async(req,res)=>{
        var code = req.params.code;
        var data = {
            deleted_at : new Date()
        }
        var consumption = await consumptionRepository.deleteConsumptionByCode(data,code);
        res.status(200).json(consumption);
    }
}

module.exports= ConsumptionController;