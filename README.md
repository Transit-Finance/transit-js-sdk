# transit-js-sdk

This SDK is a JavaScript library for buying or selling and cross swap on Transit Swap, so you don't need to interact with the Transit Swap API and smart contracts directly.

If you just want to get information about api params or return result, [call the API directly](https://docs.transit.finance/transitswap/v/transit-finance-english/).

## Getting Started

The SDK without requires an Transit Swap API key. 

### Install

Install with

```
npm i @transitswap/js-sdk
```

### Initiating SDK

```
const transit = require("@transitswap/js-sdk")
```

## Constant Methods

- Query all supported chains for Transit Swap. Return `chain`  json array.

```
//chain json
//{
//  chain: 'ETH',
//  chainId: 1,
//  icon: 'https://tp-statics.tokenpocket.pro/token/tokenpocket-1654746200716.png'
//}

const chainList = await transit.swapV1.getSupportChain()
```

- Query the smart contract address of the specified chain.
-  Before swap, the signer must approve ERC20 spending by the `approveProxy contract`
- `multiRouter` is the router of aggregator swap. `crossRouter` is the router of cross chain swap.

```
const approveProxy = await transit.swapV1.getApproveProxy(chain)
const multiRouter = await transit.swapV1.getMultiRouter(chain)
const crossRouter = await transit.swapV1.getCrossRouter(chain)
```

## Other Methods

- Query Transaction details on Transit Swap

```
const hash = "0x0cec30133c4362c9053266e3bc67a5f2d25aac5d0a75a5a46e3cbc37a9a91573"
const res = await transitSwap.swapV1.quoteDetails(hash)
console.log("amount out:", res.getAmountOut())
```

- To swap Native(`0x0000000000000000000000000000000000000000`) or Token, call the `quoteSwap` method:

```
const data = {
  chain: "BSC",
  token0: "0x0000000000000000000000000000000000000000",
  token1: "0x55d398326f99059ff775485246999027b3197955",
  decimal0: 18,
  decimal1: 18,
  to: "Your wallet address",
  amountIn: "1000000000000000000",
  impact: "300",
  amountOutMin: "0",
  part: 10,
  channel: "Your specified channel",
  issuer: "Your wallet address"
}
const res = await transitSwap.swapV1.quoteSwap(data)
if (res.isSuccess) {
  console.log("returun data:", res)
} else {
  console.log("query failure:", res.msg)
}
```

- Query supported tokens & chains of cross, call the `quoteCrossTokens` method:

```
const res = await transitSwap.swapV1.quoteCrossTokens()
if (res.isSuccess) {
  console.log("returun data:", res.getBridgers(),res.getChains(),res.getTokens())
} else {
  console.log("query failure:", res.msg)
}
```

- Before cross swap, should query the transfer limit amount, call the `quoteCrossTransferLimit` method:

```
const data = {
  token0: "0xa71edc38d189767582c38a3145b5873052c3e47a",
  token1: "0x55d398326f99059ff775485246999027b3197955",
  fromChainID: 128,
  toChainID: 56,
  bridge: "METAPATH"
}
const res = await transitSwap.swapV1.quoteCrossTransferLimit(data)
if (res.isSuccess) {
  console.log("returun data:", res.getMaximumSwap(),res.getMinimumSwap())
} else {
  console.log("query failure:", res.msg)
}
```

## About channel

Transit Swap supports partner’s "channel merchants" who can set special channel rates and rebates. Welcome to be our partner!

> Email: service@transit.finance
>
> Twitter: https://twitter.com/TransitFinance
>
> Telegram: https://t.me/Transit_Finance

## Example: Cross swap USDT(BSC) to USDT(TRON) by `METAPATH`

If the bridge is `METAPATH` , should call the method `CallbackSwap` to speed up cross's transaction. You don't need to process the callback returned information.

```
const data = {
  bridge: "METAPATH",
  token0: "0x55d398326f99059ff775485246999027b3197955",
  token1: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  decimal0: 18,
  decimal1: 6,
  to: "The recipient wallet",
  amountIn: "11000000",
  fromChainID: 56,
  toChainID: 95500,
  channel: "Your specified channel",
  issuer: "The signer wallet"
}
const res = await transitSwap.swapV1.quoteCrossSwap(data)
if(res.isSuccess) {
  //use res.getRouter(),res.getData() to send transaction... 
} else {
  console.log("query failure:",res.msg)
}

// optional
const callbackData = {
  bridge: "METAPATH",
  token0: "0x55d398326f99059ff775485246999027b3197955",
  token1: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  decimal0: 18,
  decimal1: 6,
  to: "The recipient wallet",
  amountIn: "11000000",
  fromChainID: 56,
  toChainID: 95500,
  channel: "Your specified channel",
  issuer: "The signer wallet",
  amountOutMin: res.getAmountOut(),
  hash: ${hash}
}
if (res.getExchange()=="MetaPath") {
  await transitSwap.swapV1.CallbackSwap(callbackData)
}
```



## Error Codes of API Response

This section is in the works and will provide more comprehensive documentation once completed.

The error information can now be fetched from 'msg'. If result='Failure' or isSuccess=false, it works.

## Contributing

Transit Swap welcomes contributions in the form of GitHub issues and pull-requests.