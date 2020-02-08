var AnimalsRepository = require('../repositories/AnimalsRepository');
var animalsRepository = new AnimalsRepository();
var Animals = require('../models/Animals');
var AnimalsController = {
    index: async(req, res)=> {
        var animals = await animalsRepository.getAnimals();
        res.json(animals);
    },
    show : async(req,res)=>{
        var code = req.params.code;
        var animal = await animalsRepository.getAnimalByCode(code);
        if(!animal){
        return res.status(404).send();
        }
        res.send(animal);
    },
    save :  async(req,res)=>{
        var data = req.body;
        var animals = new Animals();
        animals.animal_type_code= data.animal_type_code;
        animals.animal_name= data.animal_name;
        animals.animal_number= data.animal_number;
        animals.dob= data.dob;
        animals.created_at= new Date();
        animals.updated_at= new Date();               
        var animal = await animalsRepository.saveAnimal(animals);
        res.json(animal);
    },
    update : async(req,res)=>{
        var data = req.body;
        var code = req.params.code;
        var animal = await animalsRepository.updateAnimalByCode(data,code);
        res.status(200).json(animal);
    },  
   
    delete :  async(req,res)=>{
        var code = req.params.code;
        var data = {
            deleted_at : new Date()
        }
        var animal = await animalsRepository.deleteAnimalByCode(data,code);
        res.status(200).json(animal);
    }
}

module.exports= AnimalsController;