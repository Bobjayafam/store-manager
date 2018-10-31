import SalesModel from '../model/Sales';

class SalesController {
  static getAll(req, res) {
    const sales = SalesModel.findAll();
    return res.status(200).json({
      success: true,
      sales,
    });
  }

  static getOne(req, res) {
    const sale = SalesModel.findOne(req.params.saleId);
    return res.status(200).json({
      success: true,
      sale,
    });
  }

  static add(req, res) {
    const sale = SalesModel.addSales(req.body);
    return res.status(201).json({
      success: true,
      sale,
    });
  }
}

export default SalesController;
