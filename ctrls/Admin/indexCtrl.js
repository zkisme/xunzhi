const BaseCtrl = require('../baseCtrl');

class IndexCtrl extends BaseCtrl{
    constructor(){
        super();
    }
    async index(){
        await this.render('admin/index')
    }
}

module.exports = IndexCtrl;