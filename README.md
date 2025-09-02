# XYO Financial SDK (Node.js)
![workflow](https://github.com/syniol/xyo-sdk-node/actions/workflows/makefile.yml/badge.svg)    ![workflow](https://github.com/syniol/xyo-sdk-node/actions/workflows/npm_publish.yml/badge.svg)

<p align="center">
    <a href="https://xyo.financial" target="blank"><img alt="node.js (Turtle) Mascot" width="50%" src="https://github.com/syniol/xyo-sdk-node/blob/main/docs/mascot.png?raw=true" /></a>
    <sup><br />Unofficial Node.js Green Sea Turtle Mascot for XYO.Financial Generated and Imagined by Syniol Limited</sup>
</p>

This SDK is officially maintained by [Syniol Limited](https://syniol.com). It can be utilised for Trial and 
Premium accounts, given that a valid API key is available to connect to and access the 
Enrichment services.


## Quickstart Guide
First you need to install the XYO SDK for node.js ecosystem via [npm](https://www.npmjs.com/package/xyo-sdk) or [yarn](https://yarnpkg.com/package/xyo-sdk) package management.

__npm__:
```shell
npm i xyo-sdk
```

__yarn__:
```shell
yarn add xyo-sdk
```

Client is an entry point to use the SDK. You need a valid API Key obtainable from https://xyo.financial/dashboard

__ES5 Example__
```js
const xyo = require('xyo-sdk');

(async () => {
  const client = new xyo.Client(new xyo.ClientConfig({ apiKey: 'YourAPIKeyFromXYO.FinancialDashboard' }))
})()
```

__ES6+ and TypeScript Example__
```js
import { Client, ClientConfig } from 'xyo-sdk'

(async () => {
  const client = new Client(new ClientConfig({ apiKey: 'YourAPIKeyFromXYO.FinancialDashboard' }))
})()
```

__Enrich a Single Payment Transaction__:
```js
const enrichedTransaction = client.enrichTransaction({
  content: 'Costa PickUp',
  countryCode: 'GB',
})

console.log(enrichedTransaction.merchant)
console.log(enrichedTransaction.description)
console.log(enrichedTransaction.categories)
console.log(enrichedTransaction.logo)
```

__Enrich Payment Transaction Collection _(Bulk Enrichment)___:
```js
const enrichedTransactionCollection = client.enrichTransactionCollection([
  { 
    content: 'Costa PickUp',
    countryCode: 'GB',
  },
  {
    content: 'STRBUKS GREENWICH',
    countryCode: 'GB',
  },
])

console.log(enrichedTransactionCollection.id)
console.log(enrichedTransactionCollection.link)
```

__Payment Transaction Collection Status__:
```js
const enrichedTransactionCollectionStatus = client.enrichTransactionCollectionStatus(enrichedTransactionCollection.id)

console.log(enrichedTransactionCollectionStatus)
```


#### Credits
Copyright &copy; 2025 Syniol Limited. All rights reserved.
