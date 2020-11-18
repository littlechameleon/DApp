const SHA256 = require('crypto-js/sha256')

class Block {
    //构造函数
    constructor(index, timestamp){
        this.index = index
        this.timestamp = timestamp
        this.transactions = []
        this.previousHash = ''
        this.hash = this.calculateHash()
        this.nonce = 0
    }
    //计算区块的哈希值
    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString()
    }
    //查看当前区块里的交易信息
    getTransactions(){
        return this.transactions
    }
    //工作量证明
    mineBlock(difficulty) {
        console.log(`Mining block ${this.index}`)
        while(this.hash.substring(0, difficulty) != Array(difficulty + 1).join('0')) {
            this.nonce++
            this.hash = this.calculateHash()
        }
        console.log(`BLOCK MINED: ${this.hash}`)
    }
}

class Blockchain {
    constructor(){
        this.chain = [this.createGenesisBlock()]
        this.difficulty = 3
        this.currentTransactions = []
    }
    //创建初始区块
    createGenesisBlock(){
        const genesisBlock = new Block(0, '11/11/2020')
        genesisBlock.previousHash = '0'
        genesisBlock.transactions.push('shuai', 'fan', 520)
        genesisBlock.hash = genesisBlock.calculateHash()
        return genesisBlock
    }
    //获取最新区块
    getLatestBlock(){
        return this.chain[this.chain.length - 1]
    }
    //添加新的交易到当前区块
    addNewTransaction(sender, recipient, amount){
        this.currentTransactions.push({
            sender, recipient, amount
        })
    }
    //添加区块到区块链
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash
        newBlock.mineBlock(this.difficulty)
        // newBlock.hash = newBlock.calculateHash()
        this.chain.push(newBlock)
    }
    //验证当前区块链是否有效
    isChainValid(){
        for(let i = 1;i < this.chain.length - 1; i++) {
            const currentBlock = this.chain[i]
            const previousBlock = this.chain[i-1]

            //验证当前区块的hash是否有效
            if(currentBlock.previousHash != currentBlock.calculateHash()) {
                return false
            }

            //验证当前区块的previousHash是否等于上一个区块的hash
            if(currentBlock.previousHash != previousBlock.hash) {
                return false
            }
        }
        return true
    }
}

//测试Block
const testCoin = new Blockchain()
// console.log(JSON.stringify(testCoin.chain, undefined, 2))

//测试BlockChain
block1 = new Block('1', '18/11/2020')
block1.transactions.push('chameleon', 'shayne', 204)
testCoin.addBlock(block1)

block2 = new Block('2', '19/11/2020')
block2.transactions.push('shayne', 'shuai', 403)
testCoin.addBlock(block2)
console.log(JSON.stringify(testCoin.chain, undefined, 2))

module.exports = {Block, Blockchain}
