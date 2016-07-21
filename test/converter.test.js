var chai   = require('chai');
var expect = chai.expect

var Converter = require('../converter');

describe("Converter", function () {
  describe(".celsiusToFahrenheit()", function () {
    it("Should convert 0 c to 32 F", function () {
      expect(Converter.celsiusToFahrenheit(0)).to.equal(32);
    });
    
    it("Should convert 20 c to 68 F", function () {
      expect(Converter.celsiusToFahrenheit(20)).to.equal(68);
    });
    
    it("Should convert -5 c to 23 F", function () {
      expect(Converter.celsiusToFahrenheit(-5)).to.equal(23);
    });
  });
  
  describe(".fahrenheitToCelsius()", function () {
    it("Should convert 40 F to 4 C", function () {
      expect(Converter.fahrenheitToCelsius(40)).to.equal(4);
    });
    
    it("Should convert 100 F to 38 C", function () {
      expect(Converter.fahrenheitToCelsius(100)).to.equal(38);
    });
    
    it("Should convert -5 F to -21 C", function () {
      expect(Converter.fahrenheitToCelsius(-5)).to.equal(-21);
    });
  });
});
