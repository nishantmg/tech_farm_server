var crypto = require('crypto');

module.exports = class Production {
    constructor(id = null, code = this.generateCode(), animal_code = null, product_code = null, production_unit = null, production_amount = null, status = 1, created_at = new Date(), updated_at = new Date()) {
        this.id = id;
        this.code = code;
        this.animal_code = animal_code;
        this.product_code = product_code;
        this.production_unit = production_unit;
        this.production_amount = production_amount;
        this.status = status;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    generateCode() {
        let rand = Math.floor(Math.random() * 1011101000101010100101);
        return crypto.createHash('md5').update(Production.name + rand.toString() + ((new Date()).toString())).digest('hex');
    }

    printIDandCode() {
        console.log('Id:' + this.id + '\nCode:' + this.code);
    }
}; 