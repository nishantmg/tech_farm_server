var crypto = require('crypto');

module.exports = class Foods{
    constructor(id=null,code=this.generateCode(),food_name=null,measurement_unit=null,status=1,created_at= new Date(),updated_at= new Date()){
        this.id= id;
        this.code= code;
        this.food_name= food_name;
        this.measurement_unit= measurement_unit;
        this.status= status;
        this.created_at= created_at;
        this.updated_at= updated_at;               
    }
    generateCode(){
        let rand = Math.floor(Math.random() * 1011101000101010100101);
        return crypto.createHash('md5').update(Foods.name + rand.toString() + ((new Date()).toString())).digest('hex');
    }

    printIDandCode(){
        console.log('Id:' + this.id + '\nCode:' + this.code);
    }
}; 