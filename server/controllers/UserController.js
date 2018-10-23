import UserModel from "../model/Users";

const User = {
  add(req, res) {
    const user = UserModel.addUser(req.body);
    return res.status(201).json({ user });
  },
  getAll(req, res) {
    const users = UserModel.findAll();
    return res.status(200).json({
      success: true,
      users
    });
  }
};

export default User;
