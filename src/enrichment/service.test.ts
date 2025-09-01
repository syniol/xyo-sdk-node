import { describe, test } from 'node:test'

describe('Enrichment Test', () => {
  test('It should do positive', (t) => {
    t.assert.equal('1', '1')
  })

  test('It should do negative', (t) => {
    t.assert.notEqual('2', '1')
  })
})
