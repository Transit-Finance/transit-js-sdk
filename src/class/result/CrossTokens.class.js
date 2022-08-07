class CrossTokens {
    constructor(data) {
        this.result = data.result;
        this.msg = data.msg;
        this.data = {};
        this.isSuccess = true;
        if (data.result == "Failure") {
            this.isSuccess = false;
        } else {
            data = data.data;
            this.data.bridgers = data.bridgers;
            this.data.chains = data.chains;
            this.data.tokens = data.tokens;
        }
    }

    getBridgers() {
        return this.data.bridgers
    }
    getChains() {
        return this.data.chains
    }
    getTokens() {
        return this.data.tokens
    }
}
module.exports = CrossTokens