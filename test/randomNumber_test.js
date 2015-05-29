var chai = require("chai");
var randomNumber = require("randomNumber");

var expect = chai.expect;

describe("randomNumber", function() {
  describe("#createInteger", function() {
    it("exists", function() {
      randomNumber.createInteger(0,1);
    })

    it("a number", function() {
      expect(randomNumber.createInteger(0,1)).to.be.an('Number');
    })

    it("same value", function() {
      var value = 12;
      expect(randomNumber.createInteger(value,value)).to.be.equal(value);
    })

    it("at most max", function() {
      var max = 15;
      expect(randomNumber.createInteger(max)).to.be.most(max);
    })

    it("at least min", function() {
      var min = 12;
      expect(randomNumber.createInteger(25,min)).to.be.least(min);
    })

    it("serves only integers", function() {
      var subject = randomNumber.createInteger(50);
      expect(subject).to.be.equal(Math.floor(subject));
    })

    it("serves differenting numbers", function() {
      var isDifferent = false;
      var max = 999999999;
      var number = randomNumber.createInteger(max);

      for (var i=0; i<10; i++) {
        if (randomNumber.createInteger(max) !== number) {
          isDifferent = true;
          break;
        }
      }
      expect(isDifferent).to.be.true;
    })
  })
})