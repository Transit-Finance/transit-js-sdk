class AggSwapParams {
    constructor(data) {
        this.chain = data.chain;
        this.token0 = data.token0;
        this.token1 = data.token1;
        this.decimal0 = data.decimal0;
        this.decimal1 = data.decimal1;
        this.to = data.to;
        this.amountIn = data.amountIn;
        this.impact = data.impact;
        this.amountOutMin = data.amountOutMin;
        this.part = data.part;
        this.channel = data.channel;
        this.issuer = data.issuer;
    }

    getString() {
        var str = "?chain=" + this.chain + "&token0=" + this.token0 + "&token1=" + this.token1 + "&decimal0=" + this.decimal0 +
            "&decimal1=" + this.decimal1 + "&to=" + this.to + "&amountIn=" + this.amountIn + "&impact=" + this.impact
            + "&amountOutMin=" + this.amountOutMin + "&part=" + this.part + "&channel=" + this.channel
        return str
    }
}