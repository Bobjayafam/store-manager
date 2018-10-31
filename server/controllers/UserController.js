import UserModel from '../model/Users';
import db from '../db/connection';

class UserController {
  static add(req, res) {
    let { username, password, role } = req.body;
    username = username.toLowerCase().trim();
    password = password.trim();
    role = role.toLowerCase().trim();

    if (!username && !password && !role) {
      res.status(422).json({
        success: false,
        message: 'All fields are required',
      });
      return;
    }
    if (role !== 'admin' && role !== 'attendant') {
      res.status(422).json({
        success: false,
        message: '"role" can only be assigned a value of "admin" or "attendant"',
      });
      return;
    }
    if (!username) {
      res.status(422).json({
        success: false,
        message: "'Username' can not be empty",
      });
      return;
    }
    if (!password) {
      res.status(422).json({
        success: false,
        message: 'Password can not be empty',
      });
      return;
    }
    res.status(201).json({
      success: true,
      username,
      role,
    });
  }

  static getAll(req, res) {
    db.query('SELECT * FROM users')
      .then((users) => {
        res.status(200).json({
          success: true,
          data: users.rows,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: err.message,
        });
      });
  }

  static getOne(req, res) {
    const user = UserModel.findUser(req.params.userId);
    if (!user) {
      res.status(404).json({
        success: false,
        message: `User with userId ${req.params.userId} not found`,
      });
    }
    const { userId, username, role } = user;
    return res.json({
      success: true,
      user: {
        userId,
        username,
        role,
      },
    });
  }

  static update(req, res) {
    const updatedUser = UserModel.update(req.params.userId, req.body);
    let { username, password, role } = updatedUser;
    username = username.toLowerCase().trim();
    password = password.trim();
    role = role.toLowerCase().trim();

    if (!username && !password && !role) {
      res.status(422).json({
        success: false,
        message: 'All fields are required',
      });
      return;
    }
    if (role !== 'admin' && role !== 'attendant') {
      res.status(422).json({
        success: false,
        message: '"role" can only be assigned a value of "admin" or "attendant"',
      });
      return;
    }
    if (!username) {
      res.status(422).json({
        success: false,
        message: "'Username' can not be empty",
      });
      return;
    }
    if (!password) {
      res.status(422).json({
        success: false,
        message: 'Password can not be empty',
      });
      return;
    }
    res.status(200).json({ success: true, updatedUser });
  }

  static delete(req, res) {
    const user = UserModel.findUser(req.params.userId);
    if (!user) {
      res.status(400).json({ message: 'User not found' });
      return;
    }
    const deleteResponse = UserModel.delete(user);
    res.status(204).send(deleteResponse);
  }
}

export default UserController;
