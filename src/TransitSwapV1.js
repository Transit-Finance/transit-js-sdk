const config = require("./Config.json")
const detailsResult = require("./class/result/Details.class")
const crossLimitResult = require("./class/result/CrossLimit.class")
const crossTokensResult = require("./class/result/CrossTokens.class")
const swapOrderResult = require("./class/result/SwapOrder.class")
const crossSwapOrderResult = require("./class/result/CrossSwapOrder.class")
const swapCallbackResult = require("./class/result/Callback.class")
const aggSwapParams = require("./class/params/AggSwapParams.class")
const crossSwapParams = require("./class/params/CrossSwapParams.class")
const crossLimitParams = require("./class/params/CrossLimitParams.class")
const callbackParams = require("./class/params/SwapCallbackParams.class")
const axios = require('axios')

const TransitDomain = "https://aggserver.transit.finance/"
const TransitApis = {
    "tokens": "v3/cross/common/list",
    "cross": "v3/cross/swap",
    "orderCallback": "v3/cross/order",
    "crossLimit": "v3/cross/info",
    "swap": "v3/transit/swap",
    "details": "v3/transit/details"
}

function getSupportChain() {
    return config["Chain"]
}

function getMultiRouter(chain) {
    return config["Router"][chain]
}

function getCrossRouter(chain) {
    return config["CrossRouter"][chain]
}

function getApproveProxy(chain) {
    return config["ApproveProxy"][chain]
}

async function quoteCrossTokens() {
    const url = TransitDomain + TransitApis.tokens
    const result = await httpRequest(true, url, null)
    if (result[0]) {
        return new crossTokensResult({ "result": "Failure", "msg": result[0], "data": null })
    } else if (result[1]["result"] != 0) {
        return new crossTokensResult({ "result": "Failure", "msg": result[1]["message"], "data": null })
    } else {
        return new crossTokensResult({ "result": "Success", "msg": "Success", "data": result[1]["data"] })
    }
}

async function quoteCrossTransferLimit(info) {
    const limitParams = new crossLimitParams(info)
    const url = TransitDomain + TransitApis.crossLimit + limitParams.getString()
    const result = await httpRequest(true, url, null)
    if (result[0]) {
        return new crossLimitResult({ "result": "Failure", "msg": result[0], "data": null })
    } else if (result[1]["result"] != 0) {
        return new crossLimitResult({ "result": "Failure", "msg": result[1]["message"], "data": null })
    } else {
        return new crossLimitResult({ "result": "Success", "msg": "Success", "data": result[1]["data"] })
    }
}

async function quoteSwap(aggSwap) {
    const swapParams = new aggSwapParams(aggSwap)
    const url = TransitDomain + TransitApis.swap + swapParams.getString()
    const result = await httpRequest(true, url, null)
    if (result[0]) {
        return new swapOrderResult({ "result": "Failure", "msg": result[0], "data": null })
    } else if (result[1]["result"] != 0) {
        return new swapOrderResult({ "result": "Failure", "msg": result[1]["message"], "data": null })
    } else {
        return new swapOrderResult({ "result": "Success", "msg": "Success", "data": result[1]["data"] })
    }
}

async function quoteCrossSwap(crossSwap) {
    const crossParams = new crossSwapParams(crossSwap)
    const url = TransitDomain + TransitApis.cross + crossParams.getString()
    const result = await httpRequest(true, url, null)
    if (result[0]) {
        return new crossSwapOrderResult({ "result": "Failure", "msg": result[0], "data": null })
    } else if (result[1]["result"] != 0) {
        return new crossSwapOrderResult({ "result": "Failure", "msg": result[1]["message"], "data": null })
    } else {
        return new crossSwapOrderResult({ "result": "Success", "msg": "Success", "data": result[1]["data"] })
    }
}

async function CallbackSwap(swapCallback) {
    const swapCallbackParams = new callbackParams(swapCallback)
    const url = TransitDomain + TransitApis.orderCallback + swapCallbackParams.getString()
    const result = await httpRequest(true, url, null)
    if (result[0]) {
        return new swapCallbackResult({ "result": "Failure", "msg": result[0], "data": null })
    } else if (result[1]["result"] != 0) {
        return new swapCallbackResult({ "result": "Failure", "msg": result[1]["message"], "data": null })
    } else {
        return new swapCallbackResult({ "result": "Success", "msg": "Success", "data": result[1]["data"] })
    }
}

async function quoteDetails(hash) {
    const url = TransitDomain + TransitApis.details + "?hash=" + hash
    const result = await httpRequest(true, url, null)
    if (result[0]) {
        return new detailsResult({ "result": "Failure", "msg": result[0], "data": null })
    } else if (result[1]["result"] != 0) {
        return new detailsResult({ "result": "Failure", "msg": result[1]["message"], "data": null })
    } else {
        return new detailsResult({ "result": "Success", "msg": "Success", "data": result[1]["data"] })
    }
}

async function httpRequest(isGet, url, data) {
    if (isGet) {
        return new Promise((resolve, reject) => {
            axios.get(url).then(function (response) {
                return resolve([null, response.data])
            }).catch(function (error) {
                return resolve([error])
            })
        })
    } else {
        const headerJSON = {
            "Content-Type": "application/json"
        }
        return new Promise((resolve, reject) => {
            axios.post(url, JSON.stringify(data), { headers: headerJSON }).then(function (response) {
                return resolve([null, response.data])
            }).catch(function (error) {
                return resolve([error])
            });
        })
    }
}

module.exports = {
    getSupportChain, getMultiRouter, getCrossRouter, getApproveProxy,
    quoteCrossTokens, quoteSwap, quoteCrossTransferLimit, quoteDetails,
    quoteCrossSwap, CallbackSwap
}