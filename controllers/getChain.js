module.exports = async ctx => {
    ctx.body = {
        chain: testCoin.chain,
        length: testCoin.chain.length
    }
}