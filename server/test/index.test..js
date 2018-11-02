import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

chai.use(chaiHttp);

const should = chai.should();

describe('index route', () => {
  describe('GET /', () => {
    it('should return json', (done) => {
      chai
        .request(server)
        .get('/api/v1')
        .end((error, res) => {
          should.not.exist(error);
          res.status.should.eql(200);
          res.type.should.eql('application/json');
          res.body.success.should.equal(true);
          res.body.message.should.eql('Welcome to store manager API');
          done();
        });
    });
  });
});

describe('Page not found', () => {
  describe('GET /', () => {
    it('should return json', (done) => {
      chai
        .request(server)
        .get('/api/v1/ueueueueuu')
        .end((error, res) => {
          should.not.exist(error);
          res.status.should.eql(404);
          res.type.should.eql('application/json');
          res.body.success.should.equal(false);
          done();
        });
    });
  });
});
