import shortid from 'shortid';

class Product {
  constructor() {
    this.products = [
      {
        productId: shortid.generate(),
        name: 'Gionee M5 mini',
        price: 45000,
        quantity: 10,
        description: '2gb ram, 32gb storage and 13MP camera',
      },
      {
        productId: shortid.generate(),
        name: 'Xiaomi Redmi Note 4x',
        price: 45000,
        quantity: 10,
        description:
          '3gb ram, 32gb storage, snapdragon processor and 13MP camera',
      },
    ];
  }

  addProduct(product) {
    const {
      name, price, quantity, description,
    } = product;
    const newProduct = {
      productId: shortid.generate(),
      name,
      price,
      quantity,
      description,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id) {
    return this.products.find(product => product.productId === id);
  }

  update(id, doc) {
    const product = this.findOne(id);
    const index = this.products.indexOf(product);
    this.products[index].name = doc.name;
    this.products[index].price = doc.price;
    this.products[index].quantity = doc.quantity;
    this.products[index].description = doc.description;

    return this.products[index];
  }

  delete(id) {
    const product = this.findOne(id);
    const productIndex = this.products.indexOf(product);
    this.products.splice(productIndex, 1);
    return {};
  }
}

export default new Product();
