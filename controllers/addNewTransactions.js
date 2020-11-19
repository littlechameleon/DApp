module.exports = async ctx => {
    // let sender = ctx.request.body.sender
    const newTransaction = ctx.request.body
    testCoin.addNewTransaction(newTransaction)
    ctx.body = `The transaction ${JSON.stringify(newTransaction)} is successfully added to the the blockchain.`
}