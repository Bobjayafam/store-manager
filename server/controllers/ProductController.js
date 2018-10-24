import ProductModel from "../model/Products";

const Product = {
  getAll(req, res) {
    const products = ProductModel.findAll();
    return res.status(200).json({
      success: true,
      products
    });
  },
  getOne(req, res) {
    const product = ProductModel.findOne(req.params.productId);
    return res.status(200).json({
      success: true,
      product
    });
  }
};

export default Product;
