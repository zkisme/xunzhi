const BaseCtrl = require('../baseCtrl');

class IndexCtrl extends BaseCtrl{
    constructor(){
        super();
    }
    async index(){
        await this.render('admin/login/login')
    }
    async register(){
        await this.render('admin/login/register')
    }
}

module.exports = IndexCtrl;