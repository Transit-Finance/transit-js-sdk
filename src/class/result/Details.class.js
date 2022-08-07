class Details {
    constructor(data) {
        this.result = data.result;
        this.msg = data.msg;
        this.data = {};
        this.isSuccess = true;
        if (data.result == "Failure") {
            this.isSuccess = false;
        } else {
            data = data.data;
            this.data.sourceHash = data.sourceHash;
            this.data.sourceExplorer = data.sourceExplorer;
            this.data.targetHash = data.targetHash;
            this.data.targetExplorer = data.targetExplorer;
            this.data.chain = data.chain;
            this.data.fromChainTitle = data.fromChainTitle;
            this.data.fromSymbol = data.fromSymbol;
            this.data.toSymbol = data.toSymbol;
            this.data.status = data.status;
            this.data.statusNotes = data.statusNotes;
            this.data.fromToken = data.fromToken;
            this.data.toToken = data.toToken;
            this.data.amountIn = data.amountIn;
            this.data.amountOut = data.amountOut;
            this.data.amountOutMin = data.amountOutMin;
            this.data.fromDecimals = data.fromDecimals;
            this.data.toDecimals = data.toDecimals;
            this.data.fromAddress = data.fromAddress;
            this.data.toAddress = data.toAddress;
            this.data.fromChain = data.fromChain;
            this.data.toChain = data.toChain;
            this.data.toChainTitle = data.toChainTitle;
            this.data.timestamp = data.timestamp;
            this.data.channel = data.channel;
            this.data.dexs = data.dexs;
        }
    }

    getSourceHash() {
        return this.data.sourceHash
    }
    getSourceExplorer() {
        return this.data.sourceExplorer
    }
    getTargetHash() {
        return this.data.targetHash
    }
    getTargetExplorer() {
        return this.data.targetExplorer
    }
    getChain() {
        return this.data.chain
    }
    getFromChainTitle() {
        return this.data.fromChainTitle
    }
    getToChainTitle() {
        return this.data.toChainTitle
    }
    getStatus() {
        return this.data.status
    }
    getStatusNotes() {
        return this.data.statusNotes
    }
    getFromSymbol() {
        return this.data.fromSymbol
    }
    getToSymbol() {
        return this.data.toSymbol
    }
    getFromToken() {
        return this.data.fromToken
    }
    getToToken() {
        return this.data.toToken
    }
    getFromDecimals() {
        return this.data.fromDecimals
    }
    getToDecimals() {
        return this.data.toDecimals
    }
    getFromAddress() {
        return this.data.fromAddress
    }
    getToAddress() {
        return this.data.toAddress
    }
    getFromChain() {
        return this.data.fromChain
    }
    getToChain() {
        return this.data.toChain
    }
    getTimestamp() {
        return this.data.timestamp
    }
    getChannel() {
        return this.data.channel
    }
    getDexs() {
        return this.data.dexs
    }
    getAmountIn() {
        return this.data.amountIn
    }
    getAmountOut() {
        return this.data.amountOut
    }
    getAmountOutMin() {
        return this.data.amountOutMin
    }
}
module.exports = Details