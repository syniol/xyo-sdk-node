const xyo = require('xyo-sdk');

(async () => {
  const client = new xyo.Client({ APIKey: "dasdsadsdsadsadas"})

  console.log("Example test for XYO SDK")
  console.log("Health", client.health())
})()
