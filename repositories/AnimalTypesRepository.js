var connection = require('../database /connection');
var AnimalType = require('../models/AnimalTypes');

module.exports = class AnimalTypes{
    getAnimalTypes(){
        return new Promise((resolve,reject)=>{
            connection.query("select * from animal_types where deleted_at is null  ",
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        let animal_types = [];
                        results.forEach(result => {
                            let animal_type = new AnimalType ();
                            Object.assign(animal_type,result);
                            animal_types.push(animal_type);
                        });
                        resolve(animal_types);
                })
        })
    }

    getAnimalTypeByCode(code){
        return new Promise((resolve,reject)=>{
            connection.query("select * from animal_types where deleted_at is null and code = ?",code,
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        let animal_types = [];
                        results.forEach(result => {
                            let animal_type = new AnimalType ();
                            Object.assign(animal_type,result);
                            animal_types.push(animal_type);
                        });
                        resolve(animal_types);
                })
        })
    }

    saveAnimalTypes(data){
        return new Promise((resolve,reject)=>{
            connection.query("insert into animal_types set ?",data,
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        resolve(results);
                })
        })
    }

    updateAnimalTypeByCode(data,code){
        return new Promise((resolve,reject)=>{
            connection.query("update animal_types set ? where code = ?",[data,code],
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        resolve(results);
                })
        })
    }

    deleteAnimalTypeByCode(data,code){
        return new Promise((resolve,reject)=>{
            connection.query("update animal_types set ? where code = ?",[data,code],
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        resolve(results);
                })
        })
    }
}