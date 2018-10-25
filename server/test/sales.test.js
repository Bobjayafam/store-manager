import chai from "chai";
import chaiHttp from "chai-http";
import server from "../index";

const should = chai.should();

chai.use(chaiHttp);

describe("GET /api/v1/sales", () => {
  it("should return all sales records", done => {
    chai
      .request(server)
      .get("/api/v1/sales")
      .end((error, res) => {
        should.not.exist(error);
        res.type.should.eql("application/json");
        res.status.should.eql(200);
        res.body.success.should.equal(true);
        done();
      });
  });
});
