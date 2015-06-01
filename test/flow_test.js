var chai = require('chai');
var expect = chai.expect;

describe('program', function() {
  describe('#flow', function() {
    var sinon = require('sinon');

    beforeEach(function() {
      sinon.spy(console, 'log')
    })

    afterEach(function() {
      console.log.restore();
    })

    it('logs to console', function() {
      var index = require('../index.js')
      index
      sinon.assert.calledOnce(console.log)
    })
  })
})
