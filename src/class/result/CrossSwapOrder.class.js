class CrossSwapOrder {
    constructor(data) {
        this.result = data.result;
        this.msg = data.msg;
        this.data = {};
        this.isSuccess = true;
        if (data.result == "Failure") {
            this.isSuccess = false;
        } else {
            data = data.data;
            this.data.destChainID = data.destChainID;
            this.data.exchange = data.exchange;
            this.data.crossPool = data.crossPool;
            this.data.to = data.to;
            this.data.amountIn = data.amountIn;
            this.data.chainID = data.chainID;
            this.data.amountOut = data.amountOut;
            this.data.price = data.price;
            this.data.relayerFee = data.relayerFee;
            this.data.fee = data.fee;
            this.data.feeRate = data.feeRate;
            this.data.router = data.router;
            this.data.token0 = data.token0;
            this.data.token1 = data.token1;
            this.data.data = data.data;
        }
    }

    getDestChainID() {
        return this.data.destChainID
    }
    getExchange() {
        return this.data.exchange
    }
    getCrossPool() {
        return this.data.crossPool
    }
    getTo() {
        return this.data.to
    }
    getChainID() {
        return this.data.chainID
    }
    getAmountIn() {
        return this.data.amountIn
    }
    getPrice() {
        return this.data.price
    }
    getAmountOut() {
        return this.data.amountOut
    }
    getRelayerFee() {
        return this.data.relayerFee
    }
    getFee() {
        return this.data.fee
    }
    getFeeRate() {
        return this.data.feeRate
    }
    getRouter() {
        return this.data.router
    }
    getToken0() {
        return this.data.token0
    }
    getToken1() {
        return this.data.token1
    }
    getData() {
        return this.data.data
    }
}
module.exports = CrossSwapOrder