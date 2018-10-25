import SalesModel from "../model/Sales";

const Sale = {
  getAll(req, res) {
    const sales = SalesModel.findAll();
    return res.status(200).json({
      success: true,
      sales
    });
  }
};

export default Sale;
