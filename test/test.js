var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var expect = chai.expect;
var assert = chai.assert;

chai.use(chaiHttp);

describe('VANILLA HTTP', function() {

  it('should successfully receive a response with time', function(done) {
    chai.request(server)
      .get('/time')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should response to the GET method of /greet/paul with the correct string', function(done) {
    chai.request(server)
        .get('/greet/paul')
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.have.header('content-type', 'text/plain');
          var greeting = res.text;
          assert.equal(greeting, 'Hi there, paul');
          done();
        });
  });

  it('should response to the POST method of /greet with the correct string', function(done) {
    chai.request(server)
        .post('/greet')
        .send({name: "paul"})
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          var greeting = res.text;
          assert.equal(greeting, 'Hello there paul. How are you doing?');
          done();
        });
  });
});
