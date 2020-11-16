const SHA256 = require('crypto-js/sha256')

class Block {
    //构造函数
    constructor(index, timestamp){
        this.index = index
        this.timestamp = timestamp
        this.transactions = {}
        this.previousHash = ''
        this.hash = this.calculateHash()
    }
    //计算区块的哈希值
    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString()
    }
}