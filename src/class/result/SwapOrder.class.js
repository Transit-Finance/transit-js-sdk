class SwapOrder {
    constructor(data) {
        this.result = data.result;
        this.msg = data.msg;
        this.data = {};
        this.isSuccess = true;
        if (data.result == "Failure") {
            this.isSuccess = false;
        } else {
            data = data.data;
            this.data.srcToken = data.srcToken;
            this.data.dstToken = data.dstToken;
            this.data.part = data.part;
            this.data.to = data.to;
            this.data.sender = data.sender;
            this.data.amountIn = data.amountIn;
            this.data.usedAmountIn = data.usedAmountIn;
            this.data.totalAmountOut = data.totalAmountOut;
            this.data.totalAmountOutMin = data.totalAmountOutMin;
            this.data.impact = data.impact;
            this.data.normalFee = data.normalFee;
            this.data.fee = data.fee;
            this.data.feeRate = data.feeRate;
            this.data.aggregator = data.aggregator;
            this.data.dexPath = data.dexPath;
            this.data.upgradeAmountOutMin = data.upgradeAmountOutMin;
            this.data.amounts = data.amounts;
            this.data.data = data.data;
        }
    }

    getSrcToken() {
        return this.data.srcToken
    }
    getDstToken() {
        return this.data.dstToken
    }
    getPart() {
        return this.data.part
    }
    getTo() {
        return this.data.to
    }
    getSender() {
        return this.data.sender
    }
    getAmountIn() {
        return this.data.amountIn
    }
    getUsedAmountIn() {
        return this.data.usedAmountIn
    }
    getTotalAmountOut() {
        return this.data.totalAmountOut
    }
    getTotalAmountOutMin() {
        return this.data.totalAmountOutMin
    }
    getImpact() {
        return this.data.impact
    }
    getNormalFee() {
        return this.data.normalFee
    }
    getFee() {
        return this.data.fee
    }
    getFeeRate() {
        return this.data.feeRate
    }
    getAggregator() {
        return this.data.aggregator
    }
    getDexPath() {
        return this.data.dexPath
    }
    getUpgradeAmountOutMin() {
        return this.data.upgradeAmountOutMin
    }
    getAmounts() {
        return this.data.amounts
    }
    getData() {
        return this.data.data
    }
}
module.exports = SwapOrder