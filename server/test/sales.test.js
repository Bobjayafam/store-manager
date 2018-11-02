import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

const should = chai.should();

describe('GET /api/v1/sales', () => {
  it('should return all sales records', (done) => {
    chai
      .request(server)
      .post('/api/v1/auth/login')
      .send({
        username: 'admin',
        password: '123456',
      })
      .end((error, res) => {
        should.not.exist(error);
        res.status.should.eql(200);
        chai.request(server)
          .get('/api/v1/sales')
          .set('api-access-token', res.body.token)
          .end((error, res) => {
            should.not.exist(error);
            res.status.should.equal(200);
            res.type.should.equal('application/json');
            done();
          });
      });
  });
});

describe('GET /api/v1/sales/:id', () => {
  it('should return a single sales record', (done) => {
    chai.request(server).post('/api/v1/auth/login').send({
      username: 'admin',
      password: '123456',
    }).end((error, res) => {
      should.not.exist(error);
      chai
        .request(server)
        .get(`/api/v1/sales/${1}`)
        .set('api-access-token', res.body.token)
        .end((error, res) => {
          should.not.exist(error);
          res.status.should.eql(200);
          done();
        });
    });
  });

  it('should not return a single sales record if the sales record is not available', (done) => {
    chai.request(server).post('/api/v1/auth/login').send({
      username: 'admin',
      password: '123456',
    }).end((error, res) => {
      should.not.exist(error);
      chai
        .request(server)
        .get('/api/v1/sales/bxcbcb')
        .set('api-access-token', res.body.token)
        .end((error, res) => {
          res.body.success.should.eql(false);
          res.status.should.eql(404);
          done();
        });
    });
  });
});

describe('POST /api/v1/sales', () => {
  it('should create a new sale record', (done) => {
    chai.request(server).post('/api/v1/auth/login').send({
      username: 'admin',
      password: '123456',
    }).end((error, res) => {
      should.not.exist(error);
      chai
        .request(server)
        .post('/api/v1/sales')
        .set('api-access-token', res.body.token)
        .send({
          userId: 2,
          soldItems: [
            {
              name: 'Gionee M5 mini',
              price: '45000',
              quantity: 3,
              productId: 1,
            },
          ],
          price: 1350000,
        })
        .end((error, res) => {
          should.not.exist(error);
          res.status.should.eql(201);
          done();
        });
    });
  });

  it('should not create a new sale record if price is not an integer', (done) => {
    chai.request(server).post('/api/v1/auth/login').send({
      username: 'admin',
      password: '123456',
    }).end((error, res) => {
      should.not.exist(error);
      chai
        .request(server)
        .post('/api/v1/sales')
        .set('api-access-token', res.body.token)
        .send({
          userId: 2,
          soldItems: [
            {
              name: 'Gionee M5 mini',
              price: '45000',
              quantity: 3,
              productId: 1,
            },
          ],
          price: 'bdndnd',
        })
        .end((error, res) => {
          should.not.exist(error);
          res.body.success.should.eql(false);
          res.status.should.eql(422);
          done();
        });
    });
  });
});
