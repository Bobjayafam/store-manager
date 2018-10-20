import chai from "chai";
import chaiHttp from "chai-http";
import server from "../server/index";

chai.use(chaiHttp);

const should = chai.should();

describe("index route", () => {
  describe("GET /", () => {
    it("should return json", done => {
      chai
        .request(server)
        .get("/")
        .end((error, res) => {
          should.not.exist(error);
          res.status.should.eql(200);
          res.type.should.eql("application/json");
          res.body.success.should.equal(true);
          res.body.message.should.eql("Welcome to store manager API");
          done();
        });
    });
  });
});
