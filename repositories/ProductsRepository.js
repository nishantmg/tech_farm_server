var connection = require('../database /connection');
var Products = require('../models/Products');

module.exports = class Products {
    getProducts(){
        return new Promise((resolve,reject)=>{
            connection.query("select * from products where deleted_at is null",
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        let products = [];
                        results.forEach(result => {
                            let product = new Products ();
                            Object.assign(product,result);
                            products.push(product);
                        });
                        resolve(products);
                })
        })
    }

    getProductByCode(code){
        return new Promise((resolve,reject)=>{
            connection.query("select * from products where deleted_at is null and code = ?",code,
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        let products = [];
                        results.forEach(result => {
                            let product = new Products ();
                            Object.assign(product,result);
                            products.push(product);
                        });
                        resolve(products);
                })
        })
    }

    saveProducts(data){
        return new Promise((resolve,reject)=>{
            connection.query("insert into products set ?",data,
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        resolve(results);
                })
        })
    }

    updateProductByCode(data,code){
        return new Promise((resolve,reject)=>{
            connection.query("update products set ? where code = ?",[data,code],
                (err,results)=>{
                    if(err){
                        console.log(err);
                        reject(err);
                    }
                        resolve(results);
                })
        })
    }

    deleteProductByCode(data,code){
        return new Promise((resolve,reject)=>{
            connection.query("update products set ? where code = ?",[data,code],
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