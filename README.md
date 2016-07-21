# Temperature Conversion API

This repo contains a simple implementation for a temperature conversion API.

## Running the server

The server runs on the port provided by ```process.env.PORT``` and defaults 
to 8080.

To run the server type the command

```
npm start
```

## Endpoints

### Celsius to Fahrenheit Conversion
```
GET /c2f?t=<value>
```

Sample Response:

```
{
  'status': 'Success',
  't': 0,
  'converted_t': 32
}
```

### Fahrenheit to Celsius Conversion
```
GET /f2c?t=<value>
```

Sample Response:

```
{
  'status': 'Success',
  't': 40,
  'converted_t': 4
}
```

## Tests

To run the tests you need to have mocha installed globally through

```
npm install -g mocha
```

Install required packages

```
npm install
```

Then you can run the tests using
```
npm test
```