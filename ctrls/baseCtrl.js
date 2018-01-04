const axios = require('axios');

class BaseCtrl {
    constructor(){}
    text(data){
        this.ctx.type = 'text';
        this.ctx.body = data;
    }
    html(data){
        this.ctx.type = 'html';
        this.ctx.body = data;
    }
    json(data){
        this.ctx.type = 'json';
        this.ctx.body = data;
    }
    send(data, type){
        if(type) this.ctx.type = type;
        this.ctx.body = data;
    }
    async render(view, data){
        await this.ctx.render(view, data);
    }
}

module.exports = BaseCtrl;