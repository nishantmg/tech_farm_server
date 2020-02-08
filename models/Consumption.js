var crypto = require('crypto');

module.exports = class Consumption {
    constructor(id = null, code = this.generateCode(), animal_code = null, food_code = null, consumed_unit = null, consumed_amount = null, status = 1, created_at = new Date(), updated_at = new Date()) {
        this.id = id;
        this.code = code;
        this.animal_code = animal_code;
        this.food_code = food_code;
        this.consumed_unit = consumed_unit;
        this.consumed_amount = consumed_amount;
        this.status = status;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    generateCode() {
        let rand = Math.floor(Math.random() * 1011101000101010100101);
        return crypto.createHash('md5').update(Consumption.name + rand.toString() + ((new Date()).toString())).digest('hex');
    }

    printIDandCode() {
        console.log('Id:' + this.id + '\nCode:' + this.code);
    }
}; 