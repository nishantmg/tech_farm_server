var connection = require('../database /connection');
var Animal = require('../models/Animals');

module.exports = class Animals{
    getAnimals(){
        return new Promise((resolve,reject)=>{
            connection.query("select * from animals where deleted_at is null ",
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        let animals = [];
                        results.forEach(result => {
                            let animal = new Animal();
                            Object.assign(animal,result);
                            animals.push(animal);
                        });
                        resolve(animals);
                })
        })
    }

    getAnimalByCode(code){
        return new Promise((resolve,reject)=>{
            connection.query("select * from animals where deleted_at is null and code = ?",code,
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        let animals = [];
                        results.forEach(result => {
                            let animal = new Animal ();
                            Object.assign(animal,result);
                            animals.push(animal);
                        });
                        resolve(animals);
                })
        })
    }

    saveAnimal(data){
        return new Promise((resolve,reject)=>{
            connection.query("insert into animals set ?",data,
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        resolve(results);
                })
        })
    }

    updateAnimalByCode(data,code){
        return new Promise((resolve,reject)=>{
            connection.query("update animals set ? where code = ?",[data,code],
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        resolve(results);
                })
        })
    }

    deleteAnimalByCode(data,code){
        return new Promise((resolve,reject)=>{
            connection.query("update animals set ? where code = ?",[data,code],
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