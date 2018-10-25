import shortid from "shortid";
import bcrypt from "bcrypt";
class User {
  constructor() {
    this.users = [
      {
        userId: shortid.generate(),
        username: "judeafam",
        password: bcrypt.hashSync("123456", 10),
        admin: true
      },
      {
        userId: shortid.generate(),
        username: "stanley",
        password: bcrypt.hashSync("123456", 10),
        admin: false
      }
    ];
  }
  addUser(user) {
    let hash = bcrypt.hashSync(user.password, 10);
    const newUser = {
      userId: shortid.generate(),
      username: user.username,
      password: hash,
      admin: user.admin
    };
    this.users.push(newUser);
    return newUser;
  }

  findUser(id) {
    return this.users.find(user => {
      return user.userId === id;
    });
  }

  findAll() {
    return this.users;
  }

  update(id, doc) {
    const user = this.findUser(id);
    const userIndex = this.users.indexOf(user);
    this.users[userIndex].username = doc["username"] || user.username;
    this.users[userIndex].password =
      bcrypt.hashSync(doc["password"], 10) ||
      bcrypt.hashSync(user.password, 10);
    this.users[userIndex].admin = doc["admin"] || product.admin;
    return this.users[userIndex];
  }

  delete(id) {
    const user = this.findUser(id);
    const userIndex = this.users.indexOf(user);
    this.users.splice(userIndex, 1);
    return {};
  }
}

export default new User();
