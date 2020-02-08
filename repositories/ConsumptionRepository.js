var connection = require('../database /connection');
var Consumption = require('../models/Consumption');

module.exports = class Animals{
    getConsumptions(){
        return new Promise((resolve,reject)=>{
            connection.query("select * from consumption where deleted_at is null ",
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        let consumptions = [];
                        results.forEach(result => {
                            let consumption = new Consumption();
                            Object.assign(consumption,result);
                            consumptions.push(consumption);
                        });
                        resolve(consumptions);
                })
        })
    }

    getConsumptionByCode(code){
        return new Promise((resolve,reject)=>{
            connection.query("select * from consumption where deleted_at is null and code = ?",code,
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        let consumptions = [];
                        results.forEach(result => {
                            let consumption = new Consumption ();
                            Object.assign(consumption,result);
                            consumptions.push(consumption);
                        });
                        resolve(consumptions);
                })
        })
    }

    saveConsumption(data){
        return new Promise((resolve,reject)=>{
            connection.query("insert into consumption set ?",data,
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        resolve(results);
                })
        })
    }

    updateConsumptionByCode(data,code){
        return new Promise((resolve,reject)=>{
            connection.query("update consumption set ? where code = ?",[data,code],
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        resolve(results);
                })
        })
    }

    deleteConsumptionByCode(data,code){
        return new Promise((resolve,reject)=>{
            connection.query("update consumption set ? where code = ?",[data,code],
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