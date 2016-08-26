var Converter = {}

Converter.celsiusToFahrenheit = function(cDegree) {
  return Math.round((cDegree * 9 / 5) + 32);
}

Converter.fahrenheitToCelsius = function(fDegree) {
  return Math.round((fDegree - 32) * 5 / 9);
}

module.exports = Converter;
