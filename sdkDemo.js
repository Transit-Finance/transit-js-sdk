const transitSwap = require("./index")

async function chain() {
    const chains = await transitSwap.swapV1.getSupportChain()
    // const chains = await transitSwap.swapV1.getCrossRouter("BSC")
    console.log(chains)
}

async function crossTokens() {
    const res = await transitSwap.swapV1.quoteCrossTokens()
    if (res.msg == transitSwap.SUCCESS) {
        console.log("returun data:", res)
    } else {
        console.log("query failure:", res)
    }
}

async function limit() {
    const data = {
        token0: "0xa71edc38d189767582c38a3145b5873052c3e47a",
        token1: "0x55d398326f99059ff775485246999027b3197955",
        fromChainID: 128,
        toChainID: 56,
        bridge: "METAPATH"
    }
    const res = await transitSwap.swapV1.quoteCrossTransferLimit(data)
    if (res.msg == transitSwap.SUCCESS) {
        console.log("returun data:", res)
    } else {
        console.log("query failure:", res)
    }
}

async function swap() {
    const data = {
        chain: "BSC",
        token0: "0x0000000000000000000000000000000000000000",
        token1: "0x55d398326f99059ff775485246999027b3197955",
        decimal0: 18,
        decimal1: 18,
        to: "0xFab745c5Ee6C59C09605a40464232930892bA48C",
        amountIn: "1000000000000000000",
        impact: "300",
        amountOutMin: "0",
        part: 10,
        channel: "default",
        issuer: "0xFab745c5Ee6C59C09605a40464232930892bA48C"
    }
    const res = await transitSwap.swapV1.quoteSwap(data)
    if (res.msg == transitSwap.SUCCESS) {
        console.log("returun data:", res)
    } else {
        console.log("query failure:", res)
    }
}

async function details() {
    const res = await transitSwap.swapV1.quoteDetails("0x0cec30133c4362c9053266e3bc67a5f2d25aac5d0a75a5a46e3cbc37a9a91573")
    if (res.msg == transitSwap.SUCCESS) {
        console.log("returun data:", res)
    } else {
        console.log("query failure:", res)
    }
}

async function crossSwap() {
    const data = {
        bridge: "METAPATH",
        token0: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        token1: "0x55d398326f99059ff775485246999027b3197955",
        decimal0: 6,
        decimal1: 18,
        to: "0xFab745c5Ee6C59C09605a40464232930892bA48C",
        amountIn: "11000000",
        fromChainID: 1,
        toChainID: 56,
        channel: "default",
        issuer: "0xFab745c5Ee6C59C09605a40464232930892bA48C"
    }
    const res = await transitSwap.swapV1.quoteCrossSwap(data)
    if (res.msg == transitSwap.SUCCESS) {
        console.log("returun data:", res)
    } else {
        console.log("query failure:", res)
    }
}

async function swapCallback() {
    const data = {
        bridge: "METAPATH",
        token0: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        token1: "0x55d398326f99059ff775485246999027b3197955",
        decimal0: 6,
        decimal1: 18,
        to: "0xFab745c5Ee6C59C09605a40464232930892bA48C",
        amountIn: "11000000",
        fromChainID: 1,
        toChainID: 56,
        channel: "default",
        issuer: "0xFab745c5Ee6C59C09605a40464232930892bA48C",
        amountOutMin: "3980020",
        hash: ""
    }
    const res = await transitSwap.swapV1.CallbackSwap(data)
    if (res.msg == transitSwap.SUCCESS) {
        console.log("returun data:", res)
    } else {
        console.log("query failure:", res)
    }
}

// crossTokens()
// limit()
// swap()
// details()
// crossSwap()
// swapCallback()
// chain()