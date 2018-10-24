import shortid from "shortid";

class Product {
  constructor() {
    this.products = [
      {
        productId: shortid.generate(),
        name: "Gionee M5 mini",
        price: 45000,
        quantity: 10,
        description: "2gb ram, 32gb storage and 13MP camera"
      },
      {
        productId: shortid.generate(),
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
      productId: shortid.generate(),
      name,
      price,
      quantity,
      description
    };
    this.products.push(newProduct);
    return newProduct;
  }
  findAll() {
    return this.products;
  }
  findOne(id) {
    return this.products.find(product => {
      return product.productId === id;
    });
  }
}

export default new Product();
