var crypto = require('crypto');

module.exports = class FoodPricing{
    constructor(id=null,code=this.generateCode(),food_code=null,price=null,status=1,created_at= new Date(),updated_at= new Date()){
        this.id= id;
        this.code= code;
        this.food_code= food_code;
        this.price= price;
        this.status= status;
        this.created_at= created_at;
        this.updated_at= updated_at;               
    }
    generateCode(){
        let rand = Math.floor(Math.random() * 1011101000101010100101);
        return crypto.createHash('md5').update(FoodPricing.name + rand.toString() + ((new Date()).toString())).digest('hex');
    }

    printIDandCode(){
        console.log('Id:' + this.id + '\nCode:' + this.code);
    }
}; 