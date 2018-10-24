import ProductModel from "../model/Products";

const Product = {
  getAll(req, res) {
    const products = ProductModel.findAll();
    return res.status(200).json({
      success: true,
      products
    });
  }
};

export default Product;
