const SHA256 = require('crypto-js/sha256');


class Block{
    constructor(timestamp, data, hashPrevio = ''){
        this.timestamp = timestamp;
        this.data = data;
        this.hashPrevio = hashPrevio;
        this.has = this.calcularHash();
    }

    calcularHash(){
        return SHA256(this.timestamp + this.hashPrevio + JSON.stringify(this.data)).toString();
    }
}

class BlockChain{
    constructor (){
        this.chain = [this.crearBloqueGenesis()];
    }

    crearBloqueGenesis(){
        return new Block('28/01/2021','BloqueGenesis','0')
    }

    getUltimoBloque(){
        return this.chain[this.chain.length-1]
    }

    
}