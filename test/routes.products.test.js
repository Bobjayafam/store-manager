import chai from "chai";
import chaiHttp from "chai-http";
import server from "../server";

const { expect } = chai;
const should = chai.should();

chai.use(chaiHttp);

describe("POST api/v1/products", () => {
  it("should create a product", done => {
    chai
      .request(server)
      .post("/api/v1/products")
      .send({
        name: "Gionee M5",
        product_id: 1,
        price: 245,
        quantity: 10,
        description: "2GB Ram, 13MP, 32GB storage capacity"
      })
      .end((error, res) => {
        should.not.exist(error);
        res.status.should.eql(201);
        res.type.should.eql("application/json");
        res.body.message.should.eql("product added to store");
        res.body.success.should.eql(true);
        done();
      });
  });
});
