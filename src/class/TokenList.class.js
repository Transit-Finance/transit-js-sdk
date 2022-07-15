class TokenList {
    constructor(data) {
        this.msg = data.msg;
        if (data.msg == "Failure") {
            this.bridgers = [];
            this.chains = {};
            this.tokens = {};
        } else {
            this.bridgers = data.data.bridgers;
            this.chains = data.data.chains;
            this.tokens = data.data.tokens;
        }
    }
}


module.exports = TokenList 