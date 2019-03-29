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
  });
});
