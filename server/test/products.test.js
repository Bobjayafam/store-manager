import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

const should = chai.should();
const { expect } = chai;

chai.use(chaiHttp);

describe('GET /api/v1/products', () => {
  it('should return all products', (done) => {
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
          .get('/api/v1/products')
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

describe('GET /api/v1/products/:id', () => {
  it('should return a single product', (done) => {
    chai.request(server).post('/api/v1/auth/login').send({
      username: 'admin',
      password: '123456',
    }).end((error, res) => {
      should.not.exist(error);
      chai
        .request(server)
        .get(`/api/v1/products/${1}`)
        .set('api-access-token', res.body.token)
        .end((error, res) => {
          should.not.exist(error);
          res.status.should.eql(200);
          done();
        });
    });
  });
});


describe('POST /api/v1/products', () => {
  it('should create a new product', (done) => {
    chai.request(server).post('/api/v1/auth/login').send({
      username: 'admin',
      password: '123456',
    }).end((error, res) => {
      should.not.exist(error);
      chai
        .request(server)
        .post('/api/v1/products')
        .set('api-access-token', res.body.token)
        .send({
          name: 'Iphonex',
          price: 358000,
          quantity: 5,
          description: 'sleek and nice',
          imgUrl: 'http:unsplash.com/nice.jpg',
        })
        .end((error, res) => {
          should.not.exist(error);
          res.status.should.eql(201);
          done();
        });
    });
  });
});

describe('PUT /api/v1/products', () => {
  it('should update a single product', (done) => {
    chai.request(server).post('/api/v1/auth/login').send({
      username: 'admin',
      password: '123456',
    }).end((error, res) => {
      should.not.exist(error);
      chai
        .request(server)
        .put(`/api/v1/products/${2}`)
        .set('api-access-token', res.body.token)
        .send({
          name: 'Samsung s9',
          price: 359000,
          quantity: 4,
          description: 'sleek and nice',
          imgUrl: 'http:unsplash.com/nice.jpg',
        })
        .end((error, res) => {
          should.not.exist(error);
          res.status.should.eql(200);
          done();
        });
    });
  });
});

describe('DELETE /api/v1/products/productID', () => {
  it('should delete a single product', (done) => {
    chai.request(server).post('/api/v1/auth/login').send({
      username: 'admin',
      password: '123456',
    }).end((error, res) => {
      should.not.exist(error);
      chai
        .request(server)
        .del(`/api/v1/products/${2}`)
        .set('api-access-token', res.body.token)
        .end((error, res) => {
          should.not.exist(error);
          res.status.should.eql(200);
          done();
        });
    });
  });
});
