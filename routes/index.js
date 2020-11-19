const router = require('koa-router')()
const controllers = require('../controllers')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

//将目前的交易打包到新的区块
router.get('/mine', controllers.mine)
//添加新的交易
router.post('/transactions/new', controllers.addNewTransactions)
//获取当前区块链
router.get('/chain', controllers.getChain)

module.exports = router
