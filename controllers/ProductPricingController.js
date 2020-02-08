var ProductPricingRepository = require('../repositories/ProductPricingRepository');
var productPricingRepository = new ProductPricingRepository();
var ProductPricing = require('../models/ProductPricing');

var ProductPricingController = {
    index: async(req,res)=>{
        var product_pricings = await productPricingRepository.getProductPricings();
        res.json(product_pricings);
    },
    show: async(req,res)=>{
        var code = req.params.code;
        var product_pricing = await productPricingRepository.getProductPricingByCode(code);
        res.json(product_pricing);
    },
    save: async(req,res)=>{
        var data = req.body;
        var code = req.params.code;
        var product_pricings = new ProductPricing();
        product_pricings.product_code= data.product_code;
        product_pricings.price= data.price;
        product_pricings.created_at= new Date();
        product_pricings.updated_at= new Date();
        var product_pricing = await productPricingRepository.saveProductPricing(product_pricings);
        res.json(product_pricing);
    },
    update: async(req,res)=>{
        var data = req.body;
        var code = req.params.code;
        var product_pricing = await productPricingRepository.updateProductPricingByCode(data,code);
        res.json(product_pricing);
    },
    delete: async(req,res)=>{
        var code = req.params.code;
        var data = {
            deleted_at : new Date()
        }
        var product_pricing = await productPricingRepository.deleteProductPricingByCode(data,code);
        res.json(product_pricing);
    }
}

module.exports = ProductPricingController;