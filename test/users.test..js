import chai from "chai";
import chaiHttp from "chai-http";
import server from "../server";

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
