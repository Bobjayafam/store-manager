import shortid from "shortid";

class Sales {
  constructor() {
    this.sales = [
      {
        salesId: shortid.generate(),
        username: stanley,
        cartItems: [
          {
            productId: shortid.generate(),
            name: "Gionee M5 mini",
            price: 42000,
            quantity: 2
          },
          {
            productId: shortid.generate(),
            name: "Xiaomi Redmi note 4x",
            price: 54000,
            quantity: 1
          }
        ],
        totalPrice: 138000
      }
    ];
  }
  addSales(sale) {
    const { username, cartItems, totalPrice } = sale;
    const newSale = {
      salesId: shortid.generate(),
      username,
      cartItems,
      totalPrice
    };
    this.sales.push(newSale);
    return newSale;
  }
  findAll() {
    return this.sales;
  }
  findOne(id) {
    return this.sales.find(sale => {
      return sale.salesId === id;
    });
  }
}

export default new Product();
