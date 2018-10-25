import chai from "chai";
import chaiHttp from "chai-http";
import server from "../index";

const { expect } = chai;
const should = chai.should();

chai.use(chaiHttp);

describe("POST api/v1/users", () => {
  it("should register a new user", done => {
    chai
      .request(server)
      .post("/api/v1/users")
      .send({
        username: "messi3",
        password: "123456",
        admin: true
      })
      .end((error, res) => {
        should.not.exist(error);
        res.status.should.eql(201);
        res.type.should.eql("application/json");
        done();
      });
  });
});

describe("GET /api/v1/users", () => {
  it("should return all users", done => {
    chai
      .request(server)
      .get("/api/v1/users")
      .end((error, res) => {
        should.not.exist(error);
        res.status.should.equal(200);
        res.type.should.equal("application/json");
        done();
      });
  });
});

describe("GET /api/v1/users/userId", () => {
  it("should return a single user", done => {
    chai
      .request(server)
      .post("/api/v1/users")
      .send({ username: "messi", password: "123456", admin: false })
      .end((error, res) => {
        should.not.exist(error);
        chai
          .request(server)
          .get(`/api/v1/users/${res.body.user.userId}`)
          .end((error, res) => {
            should.not.exist(error);
            res.status.should.eql(200);
            res.type.should.eql("application/json");
            res.body.success.should.equal(true);
            done();
          });
      });
  });
});

describe("PUT /api/v1/users/userID", () => {
  it("should update a single user details", done => {
    chai
      .request(server)
      .get("/api/v1/users")
      .end((error, res) => {
        should.not.exist(error);
        chai
          .request(server)
          .get(`/api/v1/users/${res.body.users[0].userId}`)
          .end((error, res) => {
            should.not.exist(error);
            res.status.should.eql(200);
            res.body.success.should.equal(true);
            chai
              .request(server)
              .put(`/api/v1/users/${res.body.user.userId}`)
              .send({
                username: "judeafam1",
                password: "123456",
                admin: true
              })
              .end((error, res) => {
                should.not.exist(error);
                res.status.should.eql(200);
                done();
              });
          });
      });
  });
});

describe("DELETE /api/v1/users/userId", () => {
  it("should delete a single user", done => {
    chai
      .request(server)
      .get("/api/v1/users")
      .end((error, res) => {
        should.not.exist(error);
        chai
          .request(server)
          .delete(`/api/v1/users/${res.body.users[0].userId}`)
          .end((error, res) => {
            should.not.exist(error);
            res.status.should.eql(204);
            done();
          });
      });
  });
  it("should return an error when given wrong userId", done => {
    chai
      .request(server)
      .delete("/api/v1/users/55")
      .end((error, res) => {
        res.status.should.eql(400);
        done();
      });
  });
});
