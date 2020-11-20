const { Block } = require("../models/blockchain")

module.exports = async ctx => {
    const latestBlockIndex = testCoin.chain.length
    const newBlock = new Block(latestBlockIndex, new Date().toString())
    newBlock.transactions = testCoin.currentTransactions
    newBlock.transactions.unshift({
        sender: '0',
        recipient: nodeIdentifier,
        amount: 50
    })
    testCoin.addBlock(newBlock)
    testCoin.currentTransactions = []
    ctx.body = `Mined new block ${JSON.stringify(newBlock, undefined, 2)}`
}