var AnimalTypesRepository = require('../repositories/AnimalTypesRepository');
var animalTypesRepository = new AnimalTypesRepository();
var AnimalTypes = require('../models/AnimalTypes');
var AnimalTypesController = {
    index: async(req, res)=> {
        var animal_types = await animalTypesRepository.getAnimalTypes();
        res.json(animal_types);
    },
    show : async(req,res)=>{
        var code = req.params.code;
        var animal_type = await animalTypesRepository.getAnimalTypeByCode(code);
        if(!animal_type){
        return res.status(404).send();
        }
        res.send(animal_type);
    },
    save :  async(req,res)=>{
        var data = req.body;
        var animal_types = new AnimalTypes();
        animal_types.animal_type= data.animal_type;
        animal_types.short_name= data.short_name;
        animal_types.created_at= new Date();
        animal_types.updated_at= new Date();             
        console.log("After",animal_types);    
        var animal_types = await animalTypesRepository.saveAnimalTypes(animal_types);
        res.json(animal_types);
    },
    update : async(req,res)=>{
        var data = req.body;
        var code = req.params.code;
        var animal_type = await animalTypesRepository.updateAnimalTypeByCode(data,code);
        res.status(200).json(animal_type);
    },  
   
    delete :  async(req,res)=>{
        var code = req.params.code;
        var data = {
            deleted_at : new Date()
        }
        var animal_type = await animalTypesRepository.deleteAnimalTypeByCode(data,code);
        res.status(200).json(animal_type);
    }
}

module.exports= AnimalTypesController;