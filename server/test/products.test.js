import chai from "chai";
import chaiHttp from "chai-http";
import server from "../index";

const should = chai.should();
const { expect } = chai;

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

describe("PUT /api/v1/products/productID", () => {
  it("should update a single product", done => {
    chai
      .request(server)
      .get("/api/v1/products")
      .end((error, res) => {
        should.not.exist(error);
        chai
          .request(server)
          .get(`/api/v1/products/${res.body.products[0].productId}`)
          .end((error, res) => {
            should.not.exist(error);
            res.status.should.eql(200);
            res.body.success.should.equal(true);
            chai
              .request(server)
              .put(`/api/v1/products/${res.body.product.productId}`)
              .end((error, res) => {
                should.not.exist(error);
                res.status.should.eql(200);
                done();
              });
          });
      });
  });
});

describe("DELETE /api/v1/products/productId", () => {
  it("should delete a single product", done => {
    chai
      .request(server)
      .get("/api/v1/products")
      .end((error, res) => {
        should.not.exist(error);
        chai
          .request(server)
          .delete(`/api/v1/products/${res.body.products[0].productId}`)
          .end((error, res) => {
            should.not.exist(error);
            res.status.should.eql(204);
            done();
          });
      });
  });
  it("should return an error when given wrong productId", done => {
    chai
      .request(server)
      .delete("/api/v1/products/55")
      .end((error, res) => {
        res.status.should.eql(400);
        done();
      });
  });
});
