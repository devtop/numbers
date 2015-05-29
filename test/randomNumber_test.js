var chai = require("chai");
var random = require("random");

var expect = chai.expect;

describe("random", function() {
  describe("#createInteger", function() {
    it("exists", function() {
      random.createInteger(0,1);
    })

    it("a number", function() {
      expect(random.createInteger(0,1)).to.be.an('Number');
    })

    it("same value", function() {
      var value = 12;
      expect(random.createInteger(value,value)).to.be.equal(value);
    })

    it("at most max", function() {
      var max = 15;
      expect(random.createInteger(max)).to.be.most(max);
    })

    it("at least min", function() {
      var min = 12;
      expect(random.createInteger(25,min)).to.be.least(min);
    })

    it("serves only integers", function() {
      var subject = random.createInteger(50);
      expect(subject).to.be.equal(Math.floor(subject));
    })

    it("serves differenting numbers", function() {
      var isDifferent = false;
      var max = 999999999;
      var number = random.createInteger(max);

      for (var i=0; i<10; i++) {
        if (random.createInteger(max) !== number) {
          isDifferent = true;
          break;
        }
      }
      expect(isDifferent).to.be.true;
    })
  })
})