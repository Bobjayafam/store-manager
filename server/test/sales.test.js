import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

const should = chai.should();

chai.use(chaiHttp);

describe('GET /api/v1/sales', () => {
  it('should return all sales records', (done) => {
    chai
      .request(server)
      .get('/api/v1/sales')
      .end((error, res) => {
        should.not.exist(error);
        res.type.should.eql('application/json');
        res.status.should.eql(200);
        res.body.success.should.equal(true);
        done();
      });
  });
});

describe('POST /api/v1/sales', () => {
  it('should create a sales record', (done) => {
    chai
      .request(server)
      .post('/api/v1/sales')
      .send({
        username: 'stanley',
        soldItems: [
          {
            name: 'Innfinix Hot 2',
            price: 22000,
            quantity: 1,
          },
          {
            name: 'Itel p12',
            price: 10000,
            quantity: 1,
          },
        ],
        totalPrice: 32000,
      })
      .end((error, res) => {
        should.not.exist(error);
        res.status.should.eql(201);
        done();
      });
  });
});
