class Callback {
    constructor(data) {
        this.result = data.result;
        this.msg = data.msg;
        this.data = {};
        this.isSuccess = true;
        if (data.result == "Failure") {
            this.isSuccess = false;
        } else {
            this.data = data.data;
        }
    }
}


module.exports = Callback 