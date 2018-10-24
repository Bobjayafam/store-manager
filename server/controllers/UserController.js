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
  },
  getOne(req, res) {
    const user = UserModel.findUser(req.params.user_id);
    if (!user) {
      res.status(404).json({
        success: false,
        message: `User with user_id ${req.params.user_id}`
      });
    }
    return res.json({
      success: true,
      user
    });
  }
};

export default User;
