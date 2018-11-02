import ProductModel from '../model/Products';
import db from '../db/connection';

class ProductController {
  static add(req, res) {
    const {
      name, price, quantity, description, imgUrl,
    } = req.body;
    if (!name || !price || !quantity || !description || !imgUrl) {
      res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }
    if (typeof price !== 'number' || typeof quantity !== 'number') {
      res.status(400).json({
        success: false,
        message: 'Price can only be a number',
      });
    }
    db.query('INSERT INTO products (name, price, quantity, description, imgUrl) VALUES ($1, $2, $3, $4, $5) RETURNING *', [name, price, quantity, description, imgUrl])
      .then((product) => {
        if (product.rowCount > 0) {
          res.status(201).json({
            success: true,
            data: product.rows,
          });
        }
      });
  }

  static getAll(req, res) {
    db.query('SELECT * FROM products')
      .then((products) => {
        res.status(200).json({
          success: true,
          data: products.rows,
        });
      }).catch((error) => {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      });
  }

  static getOne(req, res) {
    const { id } = req.params;
    db.query('SELECT * FROM products WHERE id = $1', [parseInt(id, 10)])
      .then((product) => {
        if (product.rowCount > 0) {
          res.status(200).json({
            success: true,
            data: product.rows[0],
          });
        } else {
          res.status(404).json({
            success: false,
            message: 'Product not found',
          });
        }
      }).catch((error) => {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      });
  }

  static update(req, res) {
    const {
      name, price, quantity, description, imgUrl,
    } = req.body;
    const id = parseInt(req.params.id, 10);

    db.query('UPDATE products SET name=$1, price=$2, quantity=$3, description=$4, imgUrl=$5 WHERE id=$6', [name, price, quantity, description, imgUrl, id])
      .then((product) => {
        res.status(200).json({
          success: true,
          data: product.rows,
        });
      });
  }

  static delete(req, res) {
    let { id } = req.params;
    id = parseInt(id, 10);
    db.query('DELETE FROM products WHERE id=$1', [id])
      .then((result) => {
        res.status(200).json({
          success: true,
          message: `Removed ${result.rowCount} product`,
        });
      });
  }
}

export default ProductController;
