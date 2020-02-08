var connection = require('../database /connection');
var Production = require('../models/Production');

module.exports = class Animals{
    getProductions(){
        return new Promise((resolve,reject)=>{
            connection.query("select * from production where deleted_at is null",
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        let productions = [];
                        results.forEach(result => {
                            let production = new Production();
                            Object.assign(production,result);
                            productions.push(production);
                        });
                        resolve(productions);
                })
        })
    }

    getProductionByCode(code){
        return new Promise((resolve,reject)=>{
            connection.query("select * from production where deleted_at is null and code = ?",code,
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        let productions = [];
                        results.forEach(result => {
                            let production = new Production ();
                            Object.assign(production,result);
                            productions.push(production);
                        });
                        resolve(productions);
                })
        })
    }

    saveProduction(data){
        return new Promise((resolve,reject)=>{
            connection.query("insert into production set ?",data,
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        resolve(results);
                })
        })
    }

    updateProductionByCode(data,code){
        return new Promise((resolve,reject)=>{
            connection.query("update production set ? where code = ?",[data,code],
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        resolve(results);
                })
        })
    }

    deleteProductionByCode(data,code){
        return new Promise((resolve,reject)=>{
            connection.query("update production set ? where code = ?",[data,code],
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