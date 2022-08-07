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
const tokenList = await transit.swapV1.quoteSwap({})
```



## Error Codes of API Response

This section is in the works and will provide more comprehensive documentation once completed.

The error information can now be fetched from 'msg'. If result='Failure' or isSuccess=false, it work.

## Contributing

Transit Swap welcomes contributions in the form of GitHub issues and pull-requests.