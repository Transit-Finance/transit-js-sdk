class CrossLimitParams {
    constructor(data) {
        this.token0 = data.token0;
        this.token1 = data.token1;
        this.fromChainID = data.fromChainID;
        this.toChainID = data.toChainID;
        this.bridge = data.bridge;
    }

    getString() {
        var str = "?bridge=" + this.bridge + "&token0=" + this.token0 + "&token1=" + this.token1 +
            "&fromChainID=" + this.fromChainID + "&toChainID=" + this.toChainID
        return str
    }
}

module.exports = CrossLimitParams