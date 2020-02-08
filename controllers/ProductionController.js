var ProductionRepository = require('../repositories/ProductionRepository');
var productionRepository = new ProductionRepository();
var Production = require('../models/Production');
var ProductionController = {
    index: async(req, res)=> {
        var productions = await productionRepository.getProductions();
        res.json(productions);
    },
    show : async(req,res)=>{
        var code = req.params.code;
        var production = await productionRepository.getProductionByCode(code);
        if(!production){
        return res.status(404).send();
        }
        res.send(production);
    },
    save :  async(req,res)=>{
        var data = req.body;
        var productions = new Production();
        productions.animal_code = data.animal_code;
        productions.product_code = data.product_code;
        productions.production_unit = data.production_unit;
        productions.production_amount = data.production_amount;
        productions.created_at = new Date();
        productions.updated_at = new Date();
        var production = await productionRepository.saveProduction(productions);
        res.json(production);
    },
    update : async(req,res)=>{
        var data = req.body;
        var code = req.params.code;
        var production = await productionRepository.updateProductionByCode(data,code);
        res.status(200).json(production);
    },  
   
    delete :  async(req,res)=>{
        var code = req.params.code;
        var data = {
            deleted_at : new Date()
        }
        var production = await productionRepository.deleteProductionByCode(data,code);
        res.status(200).json(production);
    }
}

module.exports= ProductionController;