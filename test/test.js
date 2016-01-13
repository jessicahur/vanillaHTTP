var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var expect = chai.expect;

chai.use(chaiHttp);

describe('VANILLA HTTP', function() {

  it('should successfully receive a response with time', function() {
    chai.request(server)
      .get('/time')
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
      });
  });

  it('should response to the GET method of /greet/paul with the correct string', function() {
    chai.request(server)
        .get('/greet/paul')
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.be.text;
        });
  });

  it('should response to the POST method of /greet with the correct string', function() {
    chai.request(server)
        .post('/greet')
        .send({"name": "paul"})
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.be.text;
        });
  });
});
