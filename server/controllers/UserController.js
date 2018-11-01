import bcrypt from 'bcrypt';
import db from '../db/connection';
import Auth from '../Middleware/Auth';

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
    const hashed = bcrypt.hashSync(password, 10);
    db.query(
      'INSERT INTO users(username, password, role) VALUES ($1, $2, $3) RETURNING *',
      [username, hashed, role],
    )
      .then((user) => {
        if (user.rowCount > 0) {
          res.status(201).json({
            success: true,
            user: user.rows[0],
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          error: error.message,
        });
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

  static login(req, res) {
    const { username, password } = req.body;
    db.query('SELECT * FROM users WHERE username = $1', [username])
      .then((user) => {
        if (user.rowCount > 0) {
          const { username, hashPassword, role } = user.rows[0];
          bcrypt.compare(password, user.rows[0].password).then((result) => {
            if (result) {
              const payload = { username, password, role };
              Auth.generateToken(payload, res);
            } else {
              res.status(401).json({
                success: false,
                message: 'Unable to login',
              });
            }
          });
        }
      });
  }

  static getOne(req, res) {
    const { id } = req.params;
    db.query('SELECT username, role FROM users WHERE id = $1', [parseInt(id, 10)])
      .then((user) => {
        if (user) {
          res.status(200).json({
            success: true,
            data: user.rows[0],
          });
        } else {
          res.status(404).json({
            success: false,
            message: 'User not found',
          });
        }
      }).catch((error) => {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      });
  }

  static update(req, res) {
    let {
      username, password, role,
    } = req.body;
    const id = parseInt(req.params.id, 10);
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
    db.query('UPDATE users SET username=$1, password=$2, role=$3 WHERE id=$4', [username, password, role, id])
      .then((user) => {
        res.status(200).json({
          success: true,
          message: `successfully updated user with id ${id}`,
        });
      });
  }

  static delete(req, res) {
    let { id } = req.params;
    id = parseInt(id, 10);
    db.query('DELETE FROM users WHERE id=$1', [id])
      .then((result) => {
        res.status(200).json({
          success: true,
          message: `Removed ${result.rowCount} user`,
        });
      });
  }
}

export default UserController;
