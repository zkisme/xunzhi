const BaseCtrl = require('../baseCtrl');

class IndexCtrl extends BaseCtrl{
    constructor(){
        super();
    }
    index(){
        this.json('admin/index');
    }
}

module.exports = IndexCtrl;