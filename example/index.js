const xyo = require('xyo-sdk-local');

(async () => {
  new xyo.Client(new xyo.ClientConfig('ApiKeyFromXYO.FinancialDashboard'))

  console.log("Example test for XYO SDK")
})()
