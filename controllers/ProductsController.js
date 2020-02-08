var express = require('express');
var router = express.Router();
var Products = require('../models/Products');
var ProductsRepository = require('../repositories/ProductsRepository');
var productsRepository = new ProductsRepository();

var ProductsController = {
    index: async(req, res)=> {
        var products = await productsRepository.getProducts();
        res.json(products);
    },
    show : async(req,res)=>{
        var code = req.params.code;
        var product = await productsRepository.getProductByCode(code);
        if(!product){
        return res.status(404).send();
        }
        res.send(product);
    },
    save :  async(req,res)=>{
        var data = req.body;
        var products = new Products();
        products.animal_code = data.animal_code;
        products.product_name = data.product_name;
        products.short_name = data.short_name;
        products.measurement_unit = data.measurement_unit;
        products.created_at = new Date();
        products.updated_at = new Date();
        console.log("After",products);    
        var product = await productsRepository.saveProducts(products);
        res.json(product);
    },
    update : async(req,res)=>{
        var data = req.body;
        var code = req.params.code;
        var product = await productsRepository.updateProductByCode(data,code);
        res.status(200).json(product);
    },  
   
    delete :  async(req,res)=>{
        var code = req.params.code;
        var data = {
            deleted_at : new Date()
        }
        var product = await productsRepository.deleteProductByCode(data,code);
        res.status(200).json(product);
    }
}

module.exports = ProductsController ; 