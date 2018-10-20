var assert = require('assert')

describe('Hello World', () => {
  describe('#test something', () => {
    it('should pass', () => {
      assert.strictEqual([1, 2, 3].indexOf(4), -1)
    })
  })
})
