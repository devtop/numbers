var chai = require("chai");
var randomNumber = require("randomNumber");

var expect = chai.expect;

describe("randomNumber", function() {
  describe("#create", function() {
    it("exists", function() {
      randomNumber.create(0,1);
    })
  })
})