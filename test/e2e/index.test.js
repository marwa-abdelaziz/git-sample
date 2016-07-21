var request = require('supertest');
var url = "http://localhost:8080";

describe("GET /c2f", function () {
  it("Should return 400 if 't' is missing", function (done) {
    request(url)
      .get("/c2f")
      .expect('Content-Type', /json/)
      .expect(400, {
        'status': 'Error',
        'message': 'You must provide a "t" parameter and it must be numeric.'
      }, done)
  });
  
  it("Should return 400 if 't' is not numeric", function (done) {
    request(url)
      .get("/c2f")
      .expect('Content-Type', /json/)
      .expect(400, {
        'status': 'Error',
        'message': 'You must provide a "t" parameter and it must be numeric.'
      }, done)
  });
  
  it("Should respond successfully with t=0" , function (done) {
    request(url)
      .get("/c2f?t=0")
      .expect('Content-Type', /json/)
      .expect(200, {
        'status': 'Success',
        't': 0,
        'converted_t': 32
      }, done)
  })
});

describe("GET /f2c", function () {
  it("Should return 400 if 't' is missing", function (done) {
    request(url)
      .get("/f2c")
      .expect('Content-Type', /json/)
      .expect(400, {
        'status': 'Error',
        'message': 'You must provide a "t" parameter and it must be numeric.'
      }, done)
  });
  
  it("Should return 400 if 't' is not numeric", function (done) {
    request(url)
      .get("/f2c")
      .expect('Content-Type', /json/)
      .expect(400, {
        'status': 'Error',
        'message': 'You must provide a "t" parameter and it must be numeric.'
      }, done)
  });
  
  it("Should respond successfully with t=0" , function (done) {
    request(url)
      .get("/f2c?t=0")
      .expect('Content-Type', /json/)
      .expect(200, {
        'status': 'Success',
        't': 0,
        'converted_t': -18
      }, done)
  })
})

describe("GET /unknown", function () {
  it("Should return 404", function (done) {
    request(url)
      .get("/unknown")
      .expect('Content-Type', /json/)
      .expect(404, {
        'status': 'Error',
        'message': 'Not Found'
      }, done)
  });
})