var connection = require('../database /connection');
var Food = require('../models/Foods');

module.exports = class Foods {
    getFoods(){
        return new Promise((resolve,reject)=>{
            connection.query("select * from foods where deleted_at is null ",
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        let foods = [];
                        results.forEach(result => {
                            let food = new Food ();
                            Object.assign(food,result);
                            foods.push(food);
                        });
                        resolve(foods);
                })
        })
    }

    getFoodByCode(code){
        return new Promise((resolve,reject)=>{
            connection.query("select * from foods where deleted_at is null and code = ?",code,
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        let foods = [];
                        results.forEach(result => {
                            let food = new Food ();
                            Object.assign(food,result);
                            foods.push(food);
                        });
                        resolve(foods);
                })
        })
    }

    saveFoods(data){
        return new Promise((resolve,reject)=>{
            connection.query("insert into foods set ?",data,
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        resolve(results);
                })
        })
    }

    updateFoodByCode(data,code){
        return new Promise((resolve,reject)=>{
            connection.query("update foods set ? where code = ?",[data,code],
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        resolve(results);
                })
        })
    }

    deleteFoodByCode(data,code){
        return new Promise((resolve,reject)=>{
            connection.query("update foods set ? where code = ?",[data,code],
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