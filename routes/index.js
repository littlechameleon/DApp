import {Blockchain} from '../blockchain'
const router = require('koa-router')()
const testCoin = new Blockchain()

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

router.get('/mine', async (ctx, next) => {
  ctx.body = `We'll mine a new block.`
})

router.post('/transactions/new', async (ctx, next) => {
  ctx.body = `We'll add a new transaction.`
})

router.get('/chain', async (ctx, next) => {
  ctx.body = {
    chain: testCoin.chain,
    length: testCoin.chain.length
  }
})

module.exports = router
