# XYO Financial SDK (Node.js)
![workflow](https://github.com/syniol/xyo-sdk-node/actions/workflows/makefile.yml/badge.svg)    ![workflow](https://github.com/syniol/xyo-sdk-node/actions/workflows/npm_publish.yml/badge.svg)

<p align="center">
    <a href="https://xyo.financial" target="blank"><img alt="node.js (Turtle) Mascot" width="50%" src="https://github.com/syniol/xyo-sdk-node/blob/main/docs/mascot.png?raw=true" /></a>
</p>

This is an official SDK maintained by Syniol Limited. This could be used for Trial and Premium accounts with a valid 
API key to connect and consume the Enrichment services.


## Quick Guide
First you need to install the XYO SDK for node.js ecosystem via npm or yarn package management.

__NPM__:
```shell
npm i xyo-sdk
```

__YARN__:
```shell
yarn add xyo-sdk
```

In order to utilise Enrichment service, you need to create a XYO Client. Please see the example below:

__ES5 Example__
```js
const xyo = require('xyo-sdk');

(async () => {
  const client = new xyo.Client(new xyo.ClientConfig("YourAPIKeyFromXYO.FinancialDashboard"))

  console.log("Example test for XYO SDK")
  console.log("Health", client.health())
})()
```

__ES6+ and TypeScript Example__
```js
import { Client } from 'xyo-sdk'

(async () => {
  const client = new Client({ APIKey: "hgdhjagsdfhqwgfey23te1iuey1ewqioeqwe/32131236721edghjsadjgasfdh"})

  console.log("Example test for XYO SDK")
  console.log("Health", client.health())
})()
```


#### Credits
Copyright &copy; 2025 Syniol Limited. All rights reserved.
