const router = require('koa-router')();

const indexCtrl = require('../ctrls/Admin/indexCtrl'),
    loginCtrl = require('../ctrls/Admin/loginCtrl')
    ;

const routes = {
    index: {
        ctrl: indexCtrl,
        action: 'index'
    },
    login: {
        ctrl: loginCtrl,
        action: 'index'
    },
    register: {
        ctrl: loginCtrl,
        action: 'register'
    }
}

router.prefix('/admin');

router.get('/', async (ctx, next) => {
    await slot(ctx, next, 'index')
});

router.get('/login', async (ctx, next) => {
    await slot(ctx, next, 'login')
});

router.get('/register', async (ctx, next) => {
    await slot(ctx, next, 'register')
});


async function slot(ctx, next, page){
    let Ctrl = routes[page].ctrl,
        ctrl = new Ctrl();
    ctrl.ctx = ctx;
    ctrl.next = next;
    await ctrl[routes[page].action]();
}

async function notFound(ctx, next){
    ctx.type = 404;
    await ctx.render('404');
}

module.exports = router;