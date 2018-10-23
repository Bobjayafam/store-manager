import shortid from "shortid";
import bcrypt from "bcrypt";
class User {
  constructor() {
    this.users = [
      {
        user_id: shortid.generate(),
        username: "judeafam",
        password: bcrypt.hashSync("123456", 10),
        admin: true
      },
      {
        user_id: shortid.generate(),
        username: "stanley",
        password: bcrypt.hashSync("123456", 10),
        admin: false
      }
    ];
  }
  addUser(user) {
    let hash = bcrypt.hashSync(user.password, 10);
    const newUser = {
      user_id: shortid.generate(),
      username: user.username,
      password: hash,
      admin: user.admin
    };
    this.users.push(newUser);
    return newUser;
  }

  findUser(username) {
    return this.users.find(user => {
      return user.username === username;
    });
  }

  findAll() {
    return this.users;
  }
}

export default new User();
