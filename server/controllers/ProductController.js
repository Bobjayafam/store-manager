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
  },
  update(req, res) {
    const product = ProductModel.findOne(req.params.productId);
    const updatedProduct = ProductModel.update(req.params.productId, req.body);
    return res.status(200).json({ success: true, updatedProduct });
  }
};

export default Product;
