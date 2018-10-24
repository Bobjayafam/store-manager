import ProductModel from "../model/Products";

const Product = {
  add(req, res) {
    const product = ProductModel.addProduct(req.body);
    return res.status(201).json({
      success: true,
      product
    });
  },
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
  },
  delete(req, res) {
    const product = ProductModel.findOne(req.params.productId);
    if (!product) {
      res.status(400).json({ message: "Product not found" });
      return;
    }
    const deleteResponse = ProductModel.delete(product);
    res.status(204).send(deleteResponse);
  }
};

export default Product;
