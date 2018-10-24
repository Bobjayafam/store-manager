import shortid from "shortid";

class Product {
  constructor() {
    this.products = [
      {
        product_id: shortid.generate(),
        name: "Gionee M5 mini",
        price: 45000,
        quantity: 10,
        description: "2gb ram, 32gb storage and 13MP camera"
      },
      {
        product_id: shortid.generate(),
        name: "Xiaomi Redmi Note 4x",
        price: 45000,
        quantity: 10,
        description:
          "3gb ram, 32gb storage, snapdragon processor and 13MP camera"
      }
    ];
  }
  addProduct(product) {
    const { name, price, quantity, description } = product;
    const newProduct = {
      product_id: shortid.generate(),
      name,
      price,
      quantity,
      description
    };
  }
  findAll() {
    return this.products;
  }
}
