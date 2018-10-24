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
