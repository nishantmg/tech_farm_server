var crypto = require('crypto');

module.exports = class Animals{
    constructor(id=null,code=this.generateCode(),animal_type_code=null,animal_name=null,animal_number=null,dob=null,status=1,created_at= new Date(),updated_at= new Date()){
        this.id= id;
        this.code= code;
        this.animal_type_code= animal_type_code;
        this.animal_name= animal_name;
        this.animal_number= animal_number;
        this.dob= dob;
        this.status= status;
        this.created_at= created_at;
        this.updated_at= updated_at;               
    }
    generateCode(){
        let rand = Math.floor(Math.random() * 1011101000101010100101);
        return crypto.createHash('md5').update(Animals.name + rand.toString() + ((new Date()).toString())).digest('hex');
    }

    printIDandCode(){
        console.log('Id:' + this.id + '\nCode:' + this.code);
    }
}; 