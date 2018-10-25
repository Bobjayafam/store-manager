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
    const user = UserModel.findUser(req.params.userId);
    if (!user) {
      res.status(404).json({
        success: false,
        message: `User with user_id ${req.params.userId}`
      });
    }
    return res.json({
      success: true,
      user
    });
  },
  update(req, res) {
    const user = UserModel.findUser(req.params.userId);
    const updatedUser = UserModel.update(req.params.userId, req.body);
    return res.status(200).json({ success: true, updatedUser });
  },
  delete(req, res) {
    const user = UserModel.findUser(req.params.userId);
    if (!user) {
      res.status(400).json({ message: "User not found" });
      return;
    }
    const deleteResponse = UserModel.delete(user);
    res.status(204).send(deleteResponse);
  }
};

export default User;
