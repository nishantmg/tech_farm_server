var crypto = require('crypto');

module.exports = class AnimalTypes{
    constructor(id=null,code=this.generateCode(),animal_type=null,short_name=null,status=1,created_at= new Date(),updated_at= new Date()){
        this.id= id;
        this.code= code;
        this.animal_type= animal_type;
        this.short_name= short_name;
        this.status= status;
        this.created_at= created_at;
        this.updated_at= updated_at;               
    }
    generateCode(){
        let rand = Math.floor(Math.random() * 1011101000101010100101);
        return crypto.createHash('md5').update(AnimalTypes.name + rand.toString() + ((new Date()).toString())).digest('hex');
    }

    printIDandCode(){
        console.log('Id:' + this.id + '\nCode:' + this.code);
    }
}; 