import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

const should = chai.should();

chai.use(chaiHttp);

describe('POST api/v1/auth/login', () => {
  it('should login a user', (done) => {
    chai.request(server)
      .post('/api/v1/auth/login')
      .send({
        username: 'admin',
        password: '123456',
      }).end((error, res) => {
        should.not.exist(error);
        res.status.should.eql(200);
        res.body.success.should.eql(true);
        done();
      });
  });
  it('should not login a user with wrong credentials', (done) => {
    chai.request(server)
      .post('/api/v1/auth/login')
      .send({
        username: 'admin',
        password: '1234567',
      }).end((error, res) => {
        should.not.exist(error);
        res.status.should.eql(401);
        done();
      });
  });
});

describe('POST api/v1/auth/signup', () => {
  it('should sign up a new user', (done) => {
    chai.request(server)
      .post('/api/v1/auth/login')
      .send({
        username: 'admin',
        password: '123456',
      }).end((error, res) => {
        should.not.exist(error);
        res.status.should.eql(200);
        chai.request(server)
          .post('/api/v1/auth/signup')
          .set('api-access-token', res.body.token)
          .send({
            username: 'maradona',
            password: '123456',
            role: 'attendant',
          })
          .end((error, res) => {
            should.not.exist(error);
            res.status.should.eql(201);
            done();
          });
      });
  });

  it('should not sign up a new user if admin login if token is expired/wrong', (done) => {
    chai.request(server)
      .post('/api/v1/auth/login')
      .send({
        username: 'admin',
        password: '123456',
      }).end((error, res) => {
        should.not.exist(error);
        res.status.should.eql(200);
        chai.request(server)
          .post('/api/v1/auth/signup')
          .set('api-access-token', 'nsnnsmssmms')
          .send({
            username: 'maradona',
            password: '123456',
            role: 'attendant',
          })
          .end((error, res) => {
            should.not.exist(error);
            res.status.should.eql(401);
            done();
          });
      });
  });
});

describe('GET /api/v1/users', () => {
  it('should return all users', (done) => {
    chai.request(server).post('/api/v1/auth/login').send({
      username: 'admin',
      password: '123456',
    }).end((err, res) => {
      should.not.exist(err);
      chai
        .request(server)
        .get('/api/v1/users')
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

describe('GET /api/v1/users/:id', () => {
  it('should return a single user', (done) => {
    chai.request(server).post('/api/v1/auth/login').send({
      username: 'admin',
      password: '123456',
    }).end((error, res) => {
      should.not.exist(error);
      chai
        .request(server)
        .get(`/api/v1/users/${1}`)
        .set('api-access-token', res.body.token)
        .end((error, res) => {
          should.not.exist(error);
          res.status.should.eql(200);
          done();
        });
    });
  });
});


describe('PUT /api/v1/users/userID', () => {
  it('should update a single user', (done) => {
    chai.request(server).post('/api/v1/auth/login').send({
      username: 'admin',
      password: '123456',
    }).end((error, res) => {
      should.not.exist(error);
      chai
        .request(server)
        .put(`/api/v1/users/${2}`)
        .set('api-access-token', res.body.token)
        .send({
          username: 'maradona1',
          password: '123456',
          role: 'attendant',
        })
        .end((error, res) => {
          should.not.exist(error);
          res.status.should.eql(200);
          done();
        });
    });
  });
});

describe('DELETE /api/v1/users/userID', () => {
  it('should delete a single user', (done) => {
    chai.request(server).post('/api/v1/auth/login').send({
      username: 'admin',
      password: '123456',
    }).end((error, res) => {
      should.not.exist(error);
      chai
        .request(server)
        .del(`/api/v1/users/${2}`)
        .set('api-access-token', res.body.token)
        .end((error, res) => {
          should.not.exist(error);
          res.status.should.eql(200);
          done();
        });
    });
  });
});
