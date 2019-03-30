var expect = require('chai').expect;
var sBL = require('../superBowlLottery');

describe('Super Bowl Lottery', function() {
  describe('ticketToBinary', function() {
    it('is a function', function(done) {
      expect(typeof sBL.ticketToBinary).to.equal('function');
      done();
    });
    it('converts string without integers to 0', function(done) {
      let result = sBL.ticketToBinary('aaaaaaaaaa');
      expect(result).to.equal(0);
      done();
    });
    it("converts a string with a single '0' to 512", function() {
      let result = sBL.ticketToBinary('0');
      expect(result).to.equal(512);
    });
    it("converts a string with a single '9' to 1", function() {
      let result = sBL.ticketToBinary('9');
      expect(result).to.equal(1);
    });
    it("converts a string with '6789' to 15", function() {
      let result = sBL.ticketToBinary('6789');
      expect(result).to.equal(15);
    });
    it('converts a string with 0-9 to 1023', function() {
      let result = sBL.ticketToBinary('0123456789');
      expect(result).to.equal(1023);
    });
    it("converts a string with multiple 9's to 1", function() {
      let result = sBL.ticketToBinary('99999999');
      expect(result).to.equal(1);
    });
  });
});
