var connection = require('../database /connection');
var ProductPricing = require('../models/ProductPricing');

module.exports = class ProductPricings {
    getProductPricings(){
        return new Promise((resolve,reject)=>{
            connection.query("select * from product_pricing where deleted_at is null ",
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        let product_pricings = [];
                        results.forEach(result => {
                            let product_pricing = new ProductPricing ();
                            Object.assign(product_pricing,result);
                            product_pricings.push(product_pricing);
                        });
                        resolve(product_pricings);
                })
        })
    }

    getProductPricingByCode(code){
        return new Promise((resolve,reject)=>{
            connection.query("select * from product_pricing where deleted_at is null and code = ?",code,
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        let product_pricings = [];
                        results.forEach(result => {
                            let product_pricing = new ProductPricing ();
                            Object.assign(product_pricing,result);
                            product_pricings.push(product_pricing);
                        });
                        resolve(product_pricings);
                })
        })
    }

    saveProductPricing(data){
        return new Promise((resolve,reject)=>{
            connection.query("insert into product_pricing set ?",data,
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        resolve(results);
                })
        })
    }

    updateProductPricingByCode(data,code){
        return new Promise((resolve,reject)=>{
            connection.query("update product_pricing set ? where code = ?",[data,code],
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        resolve(results);
                })
        })
    }

    deleteProductPricingByCode(data,code){
        return new Promise((resolve,reject)=>{
            connection.query("update product_pricing set ? where code = ?",[data,code],
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