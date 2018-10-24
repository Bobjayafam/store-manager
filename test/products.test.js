import chai from "chai";
import chaiHttp from "chai-http";
import server from "../server/";

const should = chai.should();

chai.use(chaiHttp);

describe("GET /api/v1/products", () => {
  it("should return all products", done => {
    chai
      .request(server)
      .get("/api/v1/products")
      .end((error, res) => {
        should.not.exist(error);
        res.type.should.eql("application/json");
        res.status.should.eql(200);
        res.body.success.should.equal(true);
        done();
      });
  });
});
