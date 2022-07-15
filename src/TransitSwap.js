const config = require("./Config.json")
const tokenList = require("./class/TokenList.class")
const aggSwapParams = require("./class/AggSwapParams.class")
const aggSwapData = require("./class/AggSwapData.class")
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
    if (result[0] || result[1]["result"] != 0) {
        return new tokenList({ "msg": "Failure", "data": null })
    } else {
        return new tokenList({ "msg": "Success", "data": result[1]["data"] })
    }
}

async function quoteSwap(aggSwap) {
    const swapParams = new aggSwapParams(aggSwap)
    const url = TransitDomain + TransitApis.swap + swapParams.getString()
    const result = await httpRequest(true, url, null)
    if (result[0] || result[1]["result"] != 0) {
        return new aggSwapData({ "msg": "Failure", "data": null })
    } else {
        return new aggSwapData({ "msg": "Success", "data": result[1]["data"] })
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
    quoteCrossTokens, quoteSwap
}