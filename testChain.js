import {Block, Blockchain} from 'chain.js'

const testCoin = new Blockchain()
console.log(JSON.stringify(testCoin.chain, undefined, 2))