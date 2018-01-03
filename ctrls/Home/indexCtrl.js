const BaseCtrl = require('../baseCtrl');

class IndexCtrl extends BaseCtrl{
    constructor(){
        super();
    }
    index(){
        this.json('home/index');
    }
}

module.exports = IndexCtrl;