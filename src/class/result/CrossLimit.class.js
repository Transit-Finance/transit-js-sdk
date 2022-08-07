class CrossLimit {
    constructor(data) {
        this.result = data.result;
        this.msg = data.msg;
        this.data = {};
        this.isSuccess = true;
        if (data.result == "Failure") {
            this.isSuccess = false;
        } else {
            data = data.data;
            this.data.token0 = data.token0;
            this.data.token1 = data.token1;
            this.data.fromChainID = data.fromChainID;
            this.data.minimumSwap = data.MinimumSwap;
            this.data.maximumSwap = data.MaximumSwap;
            this.data.minimumSwapFee = data.MinimumSwapFee;
            this.data.maximumSwapFee = data.MaximumSwapFee;
            this.data.crossPool = data.CrossPool;
            this.data.crossBridge = data.CrossBridge;
        }
    }

    getToken0() {
        return this.data.token0
    }
    getToken1() {
        return this.data.token1
    }
    getFromChainID() {
        return this.data.fromChainID
    }
    getMinimumSwap() {
        return this.data.minimumSwap
    }
    getMaximumSwap() {
        return this.data.maximumSwap
    }
    getMinimumSwapFee() {
        return this.data.minimumSwapFee
    }
    getMaximumSwapFee() {
        return this.data.maximumSwapFee
    }
    getCrossPool() {
        return this.data.crossPool
    }
    getCrossBridge() {
        return this.data.crossBridge
    }
}
module.exports = CrossLimit