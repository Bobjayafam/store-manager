import shortid from 'shortid';

class Sales {
  constructor() {
    this.sales = [
      {
        salesId: shortid.generate(),
        username: 'stanley',
        soldItems: [
          {
            productId: shortid.generate(),
            name: 'Gionee M5 mini',
            price: 42000,
            quantity: 2,
          },
          {
            productId: shortid.generate(),
            name: 'Xiaomi Redmi note 4x',
            price: 54000,
            quantity: 1,
          },
        ],
        totalPrice: 138000,
      },
    ];
  }

  addSales(sale) {
    const { username, soldItems, totalPrice } = sale;
    const newSale = {
      salesId: shortid.generate(),
      username,
      soldItems,
      totalPrice,
    };
    this.sales.push(newSale);
    return newSale;
  }

  findAll() {
    return this.sales;
  }

  findOne(id) {
    return this.sales.find(sale => sale.salesId === id);
  }
}

export default new Sales();
