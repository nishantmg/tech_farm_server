var connection = require('../database /connection');
var FoodPricing = require('../models/FoodPricing');

module.exports = class FoodPricings {
    getFoodPricings(){
        return new Promise((resolve,reject)=>{
            connection.query("select * from food_pricing where deleted_at is null ",
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        let food_pricings = [];
                        results.forEach(result => {
                            let food_pricing = new FoodPricing ();
                            Object.assign(food_pricing,result);
                            food_pricings.push(food_pricing);
                        });
                        resolve(food_pricings);
                })
        })
    }

    getFoodPricingByCode(code){
        return new Promise((resolve,reject)=>{
            connection.query("select * from food_pricing where deleted_at is null and code = ?",code,
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        let food_pricings = [];
                        results.forEach(result => {
                            let food_pricing = new FoodPricing ();
                            Object.assign(food_pricing,result);
                            food_pricings.push(food_pricing);
                        });
                        resolve(food_pricings);
                })
        })
    }

    saveFoodPricing(data){
        return new Promise((resolve,reject)=>{
            connection.query("insert into food_pricing set ?",data,
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        resolve(results);
                })
        })
    }

    updateFoodPricingByCode(data,code){
        return new Promise((resolve,reject)=>{
            connection.query("update food_pricing set ? where code = ?",[data,code],
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        resolve(results);
                })
        })
    }

    deleteFoodPricingByCode(data,code){
        return new Promise((resolve,reject)=>{
            connection.query("update food_pricing set ? where code = ?",[data,code],
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