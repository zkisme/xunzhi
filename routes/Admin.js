const router = require('koa-router')();

router.prefix('/admin');

router.get('/', slot);
router.get('/:ctrl', slot);
router.get('/:ctrl/:action', slot);

async function slot(ctx, next){
    let ctrl = ctx.params.ctrl || 'index',
        action = ctx.params.action || 'index',
        Controller, controller;
    
    Controller = require(`../ctrls/Admin/${ctrl}Ctrl`);
    controller = new Controller();

    controller.ctx = ctx;
    controller.next = next;

    controller[action]();
}

module.exports = router;