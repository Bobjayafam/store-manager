import UserModel from "../model/Users";

const User = {
  add(req, res) {
    const user = UserModel.addUser(req.body);
    return res.status(201).json({ user });
  }
};

export default User;
