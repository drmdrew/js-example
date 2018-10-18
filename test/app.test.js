var assert = require('assert');

describe('Hello World', function() {
  describe('#test something', function() {
    it('should pass', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});