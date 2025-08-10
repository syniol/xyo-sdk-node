const xyo = require('mydsdsad');

(async () => {
  const client = new xyo.Client('Hello')

  console.log("Health", client.health())
  console.log("Example test for XYO SDK")
})()
