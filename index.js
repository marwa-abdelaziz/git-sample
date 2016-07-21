var http        = require('http');
var querystring = require('querystring');
var Converter   = require('./converter');

http.createServer(function (req, res) {
  
  const MSG_INVALID_T  = 'You must provide a "t" parameter and it must be numeric.';
  const MSG_NOT_FOUND  = 'Not Found';
  const STATUS_ERROR   = 'Error';
  const STATUS_SUCCESS = 'Success';
  const CODE_INVALID   = 400;
  const CODE_SUCCESS   = 200;
  const CODE_NOT_FOUND = 404;
  
  // req.url is in the form /path?k=v&i=j
  var path = req.url.split('?')[0];
  var qStr = querystring.parse(req.url.split('?')[1]);
  
  // We always respond with json
  var headers = {
    'content-type': 'application/json'
  };
  
  // Placeholders to be changed by if conditions
  var body = {};
  var statusCode = 200;
  
  switch(path) {
    case "/c2f": // Celsius to Fahrenheit
      if(!isValidQueryString(qStr)) {
        statusCode = CODE_INVALID; // Invalid Request
        body = {
          'status': STATUS_ERROR,
          'message': MSG_INVALID_T
        }
      } else {
        statusCode = CODE_SUCCESS;
        body = {
          'status': STATUS_SUCCESS,
          't': Number(qStr.t),
          'converted_t': Converter.celsiusToFahrenheit(qStr.t)
        }
      }
      break;

    case "/f2c": // Fahrenheit to Celsius
      if(!isValidQueryString(qStr)) {
        statusCode = CODE_INVALID; // Invalid Request
        body = {
          'status': STATUS_ERROR,
          'message': MSG_INVALID_T
        }
      } else {
        statusCode = CODE_SUCCESS;
        body = {
          'status': STATUS_SUCCESS,
          't': Number(qStr.t),
          'converted_t': Converter.fahrenheitToCelsius(qStr.t)
        }
      }
      break;

    default:
      statusCode = CODE_NOT_FOUND;
      body = {
        'status': STATUS_ERROR,
        'message': MSG_NOT_FOUND
      }
  }
  
  res.writeHead(statusCode, headers);
  res.end(JSON.stringify(body));
  
}).listen(process.env.PORT || 8080);


function isValidQueryString(qStr) {
  // t paramter is not provided or is not numeric
  if (!("t" in qStr) || isNaN(Number(qStr.t))) {
    return false;
  }
  
  return true;
}
