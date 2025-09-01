import { suite, test } from 'node:test'

;(async () => {
  await suite('Enrichment Test', async () => {
    await test('It should do positive', (t) => {
      t.assert.equal('1', '1')
    })

    await test('It should do negative', (t) => {
      t.assert.notEqual('2', '1')
    })
  })
})()
