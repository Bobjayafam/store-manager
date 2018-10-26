import UserModel from "../model/Users";

class UserController {
  static add(req, res) {
    const user = UserModel.addUser(req.body);
    return res.status(201).json({ user });
  }

  static getAll(req, res) {
    const users = UserModel.findAll();

    return res.status(200).json({
      success: true,
      users
    });
  }

  static getOne(req, res) {
    const user = UserModel.findUser(req.params.userId);
    if (!user) {
      res.status(404).json({
        success: false,
        message: `User with user_id ${req.params.userId}`
      });
    }
    const { userId, username, admin } = user;
    return res.json({
      success: true,
      user: {
        userId,
        username,
        admin
      }
    });
  }

  static update(req, res) {
    const user = UserModel.findUser(req.params.userId);
    const updatedUser = UserModel.update(req.params.userId, req.body);
    return res.status(200).json({ success: true, updatedUser });
  }
  static delete(req, res) {
    const user = UserModel.findUser(req.params.userId);
    if (!user) {
      res.status(400).json({ message: "User not found" });
      return;
    }
    const deleteResponse = UserModel.delete(user);
    res.status(204).send(deleteResponse);
  }
}

export default UserController;
