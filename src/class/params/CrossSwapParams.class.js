class CrossSwapParams {
    constructor(data) {
        this.bridge = data.bridge;
        this.token0 = data.token0;
        this.token1 = data.token1;
        this.decimal0 = data.decimal0;
        this.decimal1 = data.decimal1;
        this.to = data.to;
        this.amountIn = data.amountIn;
        this.fromChainID = data.fromChainID;
        this.toChainID = data.toChainID;
        this.channel = data.channel;
        this.issuer = data.issuer;
    }

    getString() {
        var str = "?bridge=" + this.bridge + "&token0=" + this.token0 + "&token1=" + this.token1 + "&decimal0=" + this.decimal0 +
            "&decimal1=" + this.decimal1 + "&to=" + this.to + "&amountIn=" + this.amountIn + "&fromChainID=" + this.fromChainID
            + "&toChainID=" + this.toChainID + "&channel=" + this.channel + "&issuer=" + this.issuer
        return str
    }
}

module.exports = CrossSwapParams 