import db from '../db/connection';

class SalesController {
  static getAll(req, res) {
    db.query('SELECT * FROM sales')
      .then((sales) => {
        res.status(200).json({
          success: true,
          data: sales.rows,
        });
      });
  }

  static add(req, res) {
    const { userId, soldItems, price } = req.body;
    if (!userId || !soldItems || !price) {
      res.status(422).json({
        success: false,
        message: 'All fields are required',
      });
      return;
    }
    if (typeof userId !== 'number' || typeof price !== 'number') {
      res.status(422).json({
        success: false,
        message: 'userId must be a number',
      });
      return;
    }
    db.query('INSERT INTO sales (userId, soldItems, price) VALUES ($1, $2, $3) RETURNING *', [userId, JSON.stringify(soldItems), price])
      .then((sale) => {
        if (sale.rowCount > 0) {
          res.status(201).json({
            success: true,
            data: sale.rows,
          });
        }
      }).catch((error) => {
        res.status(400).json({
          success: false,
          message: 'unable to create sales record',
        });
      });
  }

  static getOne(req, res) {
    const { id } = req.params;
    db.query('SELECT * FROM sales WHERE id = $1', [parseInt(id, 10)])
      .then((sale) => {
        if (sale.rowCount > 0) {
          res.status(200).json({
            success: true,
            data: sale.rows[0],
          });
        } else {
          res.status(404).json({
            success: false,
            message: 'Sales record not found',
          });
        }
      }).catch((error) => {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      });
  }
}

export default SalesController;
