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

  describe('tallyOccurances', function() {
    it('is a function', function() {
      expect(sBL.tallyOccurances).to.be.a('function');
    });
    it('returns an empty arry for an empty string', function() {
      let result = sBL.tallyOccurances('');
      expect(result).to.eql([]);
    });
    it('creates nested tuple for a single instance of a digit string', function() {
      let result = sBL.tallyOccurances('9');
      expect(result).to.eql([[9, 1]]);
    });
    it('creates nested tuple for a double instance of a digit string', function() {
      let result = sBL.tallyOccurances('99');
      expect(result).to.eql([[9, 2]]);
    });
    it('creates two nested tuples for a 2 single digit string', function() {
      let result = sBL.tallyOccurances('90');
      expect(result).to.eql([[0, 1], [9, 1]]);
    });
  });
});
